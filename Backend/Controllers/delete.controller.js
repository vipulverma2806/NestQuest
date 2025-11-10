import Listing from "../Model/listing.model.js";
import User from "../Model/user.model.js";
const deleteProperty = async (req, res) => {
  try {
    console.log("userid", req.id);
    const userId = req.id;
    console.log("propertyid", req.params);
    const { propertyID } = req.params;
    const deleted = await Listing.findByIdAndDelete(propertyID);
    console.log("deleted", deleted);
    if (!deleted) {
      return res.status(404).json("Property not found");
    }
    await User.findByIdAndUpdate(userId, {
      $pull: { listing: propertyID },
    });
    return res.status(200).json("deleted succesfully");
  } catch (err) {
    console.log(err);
  }
};
export default deleteProperty;
