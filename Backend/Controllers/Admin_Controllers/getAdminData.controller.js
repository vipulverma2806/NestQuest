import Listing from "../../Model/listing.model.js";
import Booking from "../../Model/booking.model.js";
import User from "../../Model/user.model.js";
import Review from "../../Model/review.model.js";
const getAdminData = async (req, res) => {
  try {
    const allListings = await Listing.find().populate("host");
    const allUsers = await User.find().select("-password");
    const allBookings = await Booking.find();
    const allReviews = await Review.find();
    const adminInfo = await User.findById(req.id).select("-password");
    console.log(adminInfo);
    res.json({ allListings, allUsers, allBookings, allReviews, adminInfo });
  } catch (err) {
    console.log(err);
  }
};
export default getAdminData;
