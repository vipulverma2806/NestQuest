import express from "express";
import bookingController from "../Controllers/User_Controllers/booking.controller.js";
import checkAuth from "../Middleware/checkAuth.js";
let bookingRouter = express.Router();

bookingRouter.post("/booking/:id", checkAuth, bookingController);

export default bookingRouter;
