import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDB = async () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log("database connected"))
    .catch((err) => console.log(err));
};

export default connectDB;
