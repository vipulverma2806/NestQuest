import express from "express";
import upload from "../Middleware/multer.js";
import listingController from "../Controllers/listing.controller.js";
import getAll from "../Controllers/getAll.controller.js";
import checkAuth from "../Middleware/checkAuth.js";
const listingRouter = express.Router();

listingRouter.post(
  "/post",
  upload.fields([
    { name: "bimg1", maxCount: 1 },
    { name: "bimg2", maxCount: 1 },
    { name: "bimg3", maxCount: 1 },
  ]),
  checkAuth,
  listingController
);

listingRouter.get("/getAll", getAll);
export default listingRouter;
