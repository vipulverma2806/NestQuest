import express from "express";
import upload from "../Middleware/multer.js";
import listingController from "../Controllers/listing.controller.js";
const listingRouter = express.Router();

listingRouter.post(
  "/post",
  upload.fields([
    { name: "bimg1", maxCount: 1 },
    { name: "bimg2", maxCount: 1 },
    { name: "bimg3", maxCount: 1 },
  ]),
  listingController
);
export default listingRouter;
