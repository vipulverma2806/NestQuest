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
    return uploadResult;
  } catch (err) {
    console.log(err);
  }
};



export const deleteOnCloudinary = async (public_url) => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  try {
    if (!public_url) return null;
    const deleteResult = await cloudinary.uploader.destroy(public_url);
    console.log("image deleted",deleteResult);
    return deleteResult;
  } catch (err) {
    console.log(err);
  }
};


export default uploadOnCloudinary;
