import express from "express";
import Votes from "../models/Votes.js" 
import { createVotes, getMyVotes } from "../controllers/votes.js";

const router = express.Router();

//CREATE
router.post("/", createVotes);
 
//GET VOTES
router.get("/:userId", getMyVotes);

export default router