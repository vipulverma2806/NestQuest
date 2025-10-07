import express from "express";
import register from "../Controllers/register.controller.js";
import login from "../Controllers/login.controller.js";
const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);

export default authRouter;
