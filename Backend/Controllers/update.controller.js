import Listing from "../Model/listing.model.js";
import User from "../Model/user.model.js";
import uploadOnCloudinary from "../Config/cloudinary.js";
const update = async (req, res) => {
  req.body.host = req.id;
  const propertyID = req.body.propertyID;
  const property = await Listing.findById(propertyID);

  try {
    console.log(req.body);
    if (Object.keys(req.files).length !== 0) {
      const img1 = await uploadOnCloudinary(req.files.bimg1[0].path);
      const img2 = await uploadOnCloudinary(req.files.bimg2[0].path);
      const img3 = await uploadOnCloudinary(req.files.bimg3[0].path);
      req.body.img1 = img1;
      req.body.img2 = img2;
      req.body.img3 = img3;
    }
    try {
      const result = await Listing.findByIdAndUpdate(
        propertyID,
        { $set: req.body },
        {
          new: true,
          runValidators: true,
        }
      );
      console.log(result);
      res.status(200).json({ msg: "updated Successfullly", result });
    } catch (err) {
      res.status(401).json("Some andar Error Occured");
    }
  } catch (err) {
    res.status(401).json("Some bahar Error Occured");
  }
};
export default update;
