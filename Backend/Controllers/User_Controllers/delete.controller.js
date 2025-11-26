import Listing from "../../Model/listing.model.js";

import User from "../../Model/user.model.js";
import { deleteOnCloudinary } from "../../Config/cloudinary.js";
const deleteProperty = async (req, res) => {
  try {
    console.log("userid", req.id);
    const userId = req.id;
    console.log("propertyid", req.params);
    const { propertyID } = req.params;
    // const property = await Listing.findById(propertyID)
    const deleted = await Listing.findByIdAndDelete(propertyID);
    console.log("deleted", deleted);
    if (!deleted) {
      return res.status(404).json("Property not found");
    }
    const fromuser = await User.findByIdAndUpdate(userId, {
      $pull: { listing: deleted._id },
    });

    // console.log(deleted.img1,deleted.img2,deleted.img3)
    const a1 = await deleteOnCloudinary(deleted.img1_id);
    const a2 = await deleteOnCloudinary(deleted.img2_id);
    const a3 = await deleteOnCloudinary(deleted.img3_id);

    // console.log("fromuser",fromuser)
    console.log(a1,a2,a3)
    return res.status(200).json("deleted succesfully");
  } catch (err) {
    console.log(err);
  }
};
export default deleteProperty;
