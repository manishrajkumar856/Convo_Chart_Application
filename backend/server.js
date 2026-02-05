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
// app.use(cors()); // Allow from all origin
import cors from "cors";

const allowedOrigins = [
  "https://convo-chart-application-1.onrender.com", // deployed frontend
  "http://localhost:9000"                           // dev environment
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));

app.use(express.static('./public'));

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