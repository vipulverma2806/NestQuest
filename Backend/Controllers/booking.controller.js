import Listing from "../Model/listing.model.js";
import Booking from "../Model/booking.model.js";
import User from "../Model/user.model.js";

const bookingController = async (req, res) => {
  try {
    console.log(req.body);
    const { checkIn, checkOut, host, guest, totalRent } = req.body;
    const propertyId = req.params.id;

    const listing = await Listing.findById(propertyId);
    if (!listing) return res.status(404).json("Property not found");
    if (new Date(checkIn) >= new Date(checkOut))
      return res.status(402).json("Invalid Date range");
    if (listing.isBooked) return res.status(720).json("Already Booked");
    const booking = await Booking.create({
      checkIn,
      checkOut,
      host,
      guest,
      totalRent,

      listing: propertyId,
    });

    const user = await User.findByIdAndUpdate(guest, {
      $push: { booking: listing },
    });
    listing.guest = guest;
    listing.isBooked = true;
    await listing.save();

    console.log(booking);
    res.status(200).json("Booking completed")
  } catch (err) {
    console.log(err);
     res.status(401).json("Some error occurred")
  }
};
export default bookingController;
