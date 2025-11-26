import express from "express";
import register from "../Controllers/User_Controllers/register.controller.js";
import login from "../Controllers/User_Controllers/login.controller.js";
import logout from "../Controllers/User_Controllers/logout.controller.js";
import checkOnlyAuth from "../Controllers/User_Controllers/checkOnlyAuth.controller.js";
import getUserData from "../Controllers/User_Controllers/getUserData.controller.js";
import checkAuth from "../Middleware/checkAuth.js";
const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.get("/getuserdata", checkAuth, getUserData);
authRouter.delete("/logout", checkAuth, logout);
authRouter.get("/checkOnlyAuth", checkAuth, checkOnlyAuth);

export default authRouter;
