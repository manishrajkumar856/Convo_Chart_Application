import express from "express";
import { isAuthenticated } from "../Middleware/isAuthenticated.js";
import { getAllFriends } from "../controller/friends_controller.js";

const friendRouter = express.Router();


friendRouter.get('/getAllFriends/:userId', isAuthenticated, getAllFriends)



export default friendRouter;