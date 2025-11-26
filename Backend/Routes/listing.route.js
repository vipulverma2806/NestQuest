import express from "express";
import upload from "../Middleware/multer.js";
import listingController from "../Controllers/User_Controllers/listing.controller.js";
import getAll from "../Controllers/User_Controllers/getAll.controller.js";
import update from "../Controllers/User_Controllers/update.controller.js";
import checkAuth from "../Middleware/checkAuth.js";
import deleteProperty from "../Controllers/User_Controllers/delete.controller.js";
import cancelProperty from "../Controllers/User_Controllers/cancel.controller.js";
import search from "../Controllers/User_Controllers/search.controller.js";
import review from "../Controllers/User_Controllers/review.controller.js";
import { getReviews } from "../Controllers/User_Controllers/review.controller.js";
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
listingRouter.post("/review", checkAuth, review);
listingRouter.get("/getReviews/:propertyID", getReviews);
listingRouter.get("/search", search);
listingRouter.delete("/delete/:propertyID", checkAuth, deleteProperty);
listingRouter.put("/cancel/:propertyID", checkAuth, cancelProperty);
listingRouter.put(
  "/update",
  upload.fields([
    { name: "bimg1", maxCount: 1 },
    { name: "bimg2", maxCount: 1 },
    { name: "bimg3", maxCount: 1 },
  ]),
  checkAuth,
  update
);
export default listingRouter;
