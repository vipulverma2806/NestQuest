import express from "express";


import logout from "../Controllers/logout.controller.js";
import checkOnlyAuth from "../Controllers/checkOnlyAuth.controller.js";
import getUserData from "../Controllers/getUserData.controller.js";
import checkAdmin from "../Middleware/checkAdmin.js";
import getAdminData from "../Controllers/getAdminData.controller.js";
const adminRouter = express.Router();

adminRouter.get("/getAdminData",checkAdmin, getAdminData);
// authRouter.post("/login", login);
// authRouter.get("/getuserdata", checkAuth, getUserData);
// authRouter.delete("/logout", checkAuth, logout);
// authRouter.get("/checkOnlyAuth", checkAuth, checkOnlyAuth);

export default adminRouter;
