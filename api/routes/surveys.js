import express from "express";
import Surveys from "../models/Surveys.js"
import { createError } from "../utils/error.js";
import { createSurvey, updateSurvey, deleteSurvey, getSurvey, getSurveys, updateRatings, getPendings, getOpened, getMySurveys } from "../controllers/surveys.js";

const router = express.Router();

//CREATE
router.post("/", createSurvey);

//UPDATE
router.put("/:id", updateSurvey);

//UPDATE RATINGS
router.put("/ratings/:id/:userId", updateRatings)

//DELETE
router.delete("/:id", deleteSurvey);
 
//GET
router.get("/:id", getSurvey);
 
//GET ALL
router.get("/", getSurveys);

//GET OPEN SURVEYS
router.get("/opened/:status", getOpened);

//GET PENDINGS
router.get("/pending/:status", getPendings);

// GET MY SURVEYS
router.get("/getmysurvey/:created", getMySurveys);

export default router