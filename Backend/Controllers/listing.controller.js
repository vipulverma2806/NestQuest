import Listing from "../Model/listing.model.js";
import User from "../Model/user.model.js";
import uploadOnCloudinary from "../Config/cloudinary.js";
const listingController = async (req, res) => {
  req.body.host = req.id;
  try {
    const img1 = await uploadOnCloudinary(req.files.bimg1[0].path);
    const img2 = await uploadOnCloudinary(req.files.bimg2[0].path);
    const img3 = await uploadOnCloudinary(req.files.bimg3[0].path);
    req.body.img1 = img1;
    req.body.img2 = img2;
    req.body.img3 = img3;
    try {
      const result = await Listing.create(req.body);
      await User.findByIdAndUpdate(req.id, {
        $push: { listing: result._id },
      });
      console.log("listingController", result);
      res.json("added Successfullly");
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
  //   console.log(req.files.bimg1);
  //   console.log(req.body);
};

export default listingController;
