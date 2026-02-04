import express from "express";
import 'dotenv/config';
import cors from 'cors';
import connectDB from "./database/db.js";
import UserRouter from "./routes/user_router.js";
import publicRouter from "./routes/public_router.js";
import friendRouter from "./routes/friends_routere.js";
import { initSocket } from "./Socket_Handlers/socket.js";
import http from 'http';
import ChatRouter from "./routes/chat_router.js";


const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Allow from all origin

app.use('/api', publicRouter);
app.use('/api/user/auth', UserRouter);
app.use('/api/friend', friendRouter);
app.use('/api/chat', ChatRouter);


// Create HTTP server
const server = http.createServer(app);

// Initialize Socket.IO
const io = initSocket(server);

const PORT = process.env.PORT; 
server.listen(PORT,()=>{
    connectDB();
    console.log(`Server Running at http://localhost:${PORT}/`);
})