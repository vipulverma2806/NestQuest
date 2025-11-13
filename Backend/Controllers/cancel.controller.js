import Listing from "../Model/listing.model.js";
import User from "../Model/user.model.js";
const cancelProperty = async (req, res) => {
  try {
    console.log("userid", req.id);
    const userId = req.id;
    console.log("propertyid", req.params);
    const { propertyID } = req.params;
    const property = await Listing.findById(propertyID);
    console.log("canceled", property);
    if (!property) {
      return res.status(404).json("cancelling failed");
    }
    property.isBooked = false;
    property.save();
    await User.findByIdAndUpdate(userId, {
      $pull: { booking: property },
    });
    await Booking.findByIdAndUpdate(, {
      $pull: { booking: property },
    });

    return res.status(200).json("deleted succesfully");
  } catch (err) {
    console.log(err);
  }
};
export default deleteProperty;
