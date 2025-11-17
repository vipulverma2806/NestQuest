import Listing from "../Model/listing.model.js";
import User from "../Model/user.model.js";
import Booking from "../Model/booking.model.js";
import mongoose from "mongoose";
const cancelProperty = async (req, res) => {
  try {
    // console.log("userid", req.id);
    const userId = req.id;
    // console.log("propertyid", req.params);
    const { propertyID } = req.params;
    const property = await Listing.findById(propertyID);
    // console.log("canceled", property);
    // console.log("property_.id ",property._id )
    // console.log("propertyID ",propertyID )
    if (!property) {
      return res.status(404).json("Property not found");
    }
    property.isBooked = false;
    await property.save();
    if (propertyID) {
      // console.log("if incoming" ,property._id);
      // console.log(typeof propertyID, propertyID instanceof mongoose.Types.ObjectId);

      await User.findByIdAndUpdate(
        userId,
        {
          $pull: { booking: property._id },
        },
        { new: true }
      );
      // console.log("if outgoing", updated);
      // console.log("property._id", property._id);
    }

    await Booking.findOneAndDelete({ listing: propertyID });
    await Listing.findByIdAndUpdate(
      property._id,
      {
        $set: { guest: null },
      },
      { new: true }
    );

    return res.status(200).json("canceled succesfully");
  } catch (err) {
    console.log(err);
    return res.status(500).json("Error in cancelling");
  }
};
export default cancelProperty;
