import express from "express";
import register from "../Controllers/register.controller.js";
import login from "../Controllers/login.controller.js";
import logout from "../Controllers/logout.controller.js";

import getUserData from "../Controllers/getUserData.controller.js";
import checkAuth from "../Middleware/checkAuth.js";
const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.get("/getuserdata", checkAuth, getUserData);
authRouter.delete("/logout", checkAuth, logout);

export default authRouter;
