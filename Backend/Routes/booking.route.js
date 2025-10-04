import express from "express";
import bookingController from "../Controllers/booking.controller.js";
let bookingRouter = express.Router();

router.put("/bookingMain", bookingController);

export default bookingRouter;
