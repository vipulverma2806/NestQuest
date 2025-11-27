import Listing from "../../Model/listing.model.js";
import Booking from "../../Model/booking.model.js";
import User from "../../Model/user.model.js";
import Review from "../../Model/review.model.js";
import { deleteOnCloudinary } from "../../Config/cloudinary.js";
const deleteUser = async (req, res) => {
  console.log("inside deleteUser");
  try {
    console.log("inside deleteByAdmin try");
    console.log("propertyid", req.params);
    const { hostId } = req.params;
    const deletedUser = await User.findByIdAndDelete(hostId);
    if (!deletedUser) return res.status(404).json("User not found");
    const deletedListings = await Listing.deleteMany({ host: hostId });
    const deletedBooking = await Booking.deleteMany({ host: hostId });
    const deletedReview = await Review.deleteMany({ reviewer: hostId });
    return res.status(200).json("deleted succesfully");
  } catch (err) {
    console.log(err);
    return res.status(501).json("Some Error occurred", err);
  }
};
export default deleteUser;
