import express from "express";

import checkAdmin from "../Middleware/checkAdmin.js";
import getAdminData from "../Controllers/Admin_Controllers/getAdminData.controller.js";
import getCheckInsPerMonth from "../Controllers/Admin_Controllers/getCheckInsPerMonth.controllers.js";
import deleteByAdmin from "../Controllers/Admin_Controllers/deleteByAdmin.controller.js";
import deleteUser from "../Controllers/Admin_Controllers/deleteUser.controller.js";
const adminRouter = express.Router();

adminRouter.get("/getAdminData", checkAdmin, getAdminData);
adminRouter.get("/statistics/monthly-trends", checkAdmin, getCheckInsPerMonth);
adminRouter.delete("/deleteByAdmin/:propertyID",checkAdmin,deleteByAdmin);
adminRouter.delete("/deleteUser/:hostId", checkAdmin, deleteUser);

export default adminRouter;
