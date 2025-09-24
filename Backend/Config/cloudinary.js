import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

const uploadOnCloudinary = async (filepath) => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  try {
    if (!filepath) return null;
    const uploadResult = await cloudinary.uploader.upload(filepath);
    // console.log(uploadResult.secure_url);
    return uploadResult.secure_url;
  } catch (err) {
    console.log(err);
  }
};

export default uploadOnCloudinary;
