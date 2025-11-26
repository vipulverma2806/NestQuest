import express from "express";

import checkAdmin from "../Middleware/checkAdmin.js";
import getAdminData from "../Controllers/Admin_Controllers/getAdminData.controller.js";
import getCheckInsPerMonth from "../Controllers/Admin_Controllers/getCheckInsPerMonth.controllers.js"
const adminRouter = express.Router();

adminRouter.get("/getAdminData",checkAdmin, getAdminData);
adminRouter.get("/statistics/monthly-trends",checkAdmin,getCheckInsPerMonth);
// authRouter.post("/login", login);
// authRouter.get("/getuserdata", checkAuth, getUserData);
// authRouter.delete("/logout", checkAuth, logout);
// authRouter.get("/checkOnlyAuth", checkAuth, checkOnlyAuth);

export default adminRouter;
