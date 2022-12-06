import express from "express";
import { updateUser, deleteUser, getUser, getUsers } from "../controllers/user.js";
import { createError } from "../utils/error.js";
import { tokenVerify, userVerify, adminVerify } from "../utils/tokenVerify.js";

const router = express.Router();

//AUTHENTICATION CHECK 
router.get("/authenticationcheck", tokenVerify, (req, res, next) => {
    res.send("You are logged!")
});

//USER CHECK
router.get("/usercheck/:id", userVerify, (req, res, next) => {
    res.send("hello user");
});

//ADMIN CHECK
router.get("/admincheck/:id", adminVerify, (req, res, next) => {
    res.send("hello admin");
});

//UPDATE
router.put("/:id", updateUser);


//DELETE
router.delete("/:id", deleteUser);
 
//GET
router.get("/:id", getUser);


//GET ALL

router.get("/", getUsers);


export default router
 