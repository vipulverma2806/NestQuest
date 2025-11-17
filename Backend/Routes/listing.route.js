import express from "express";
import upload from "../Middleware/multer.js";
import listingController from "../Controllers/listing.controller.js";
import getAll from "../Controllers/getAll.controller.js";
import update from "../Controllers/update.controller.js";
import checkAuth from "../Middleware/checkAuth.js";
import deleteProperty from "../Controllers/delete.controller.js";
import cancelProperty from "../Controllers/cancel.controller.js";
import search from "../Controllers/search.controller.js"
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
