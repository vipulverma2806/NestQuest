import Listing from "../../Model/listing.model.js";
import Booking from "../../Model/booking.model.js";
import User from "../../Model/user.model.js";
import Review from "../../Model/review.model.js";
const getAdminData = async (req, res) => {
  try {
    const allListings = await Listing.find();
    const allUsers = await User.find();
    const allBookings = await Booking.find();
    const allReviews = await Review.find();
    res.json({ allListings, allUsers, allBookings, allReviews });
  } catch (err) {
    console.log(err);
  }
};
export default getAdminData;
