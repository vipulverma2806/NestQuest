import upload from "./Middleware/multer.js";
import express from "express";
import dotenv from "dotenv";
import multer from "multer";
import cors from "cors";
import uploadOnCloudinary from "./Config/cloudinary.js";
import listingRouter from "./Routes/listing.route.js";
import bookingRouter from "./Routes/booking.route.js";
import authRouter from "./Routes/auth.route.js";
import connectDB from "./Config/db.js";
dotenv.config();
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use("/listingMain", listingRouter);
app.use("/booking", bookingRouter);
app.use("/auth", authRouter);
connectDB();
app.listen("5000", () => console.log("server started"));

// app.post(
//   "/postimage",
//   upload.fields([
//     { name: "img1", maxCount: 1 },
//     { name: "img2", maxCount: 1 },
//     { name: "img3", maxCount: 1 },
//   ]),
//   async (req, res) => {
//     console.log(req.files.img1[0].path);
//     const URL1 = await uploadOnCloudinary(req.files.img1[0].path);
//     const URL2 = await uploadOnCloudinary(req.files.img2[0].path);
//     const URL3 = await uploadOnCloudinary(req.files.img3[0].path);
//     console.log(URL1);
//     console.log(URL2);
//     console.log(URL3);

//     // const URL2 = await uploadOnCloudinary(req.files.img2[0].path);
//     // const URL3 = await uploadOnCloudinary(req.files.img3[0].path)
//     // console.log(URL);
//     res.json(URL);
//   }
// );
