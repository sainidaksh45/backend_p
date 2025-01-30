import express from "express";
import {Router} from "express";
import {registerUser}from "../controllers/user.controllers.js";


const router=express.Router()

router.post("/register", (req, res) => {
    res.json({ message: "User registered successfully!" });
  });
//router.route("/login").post(login)
export default router