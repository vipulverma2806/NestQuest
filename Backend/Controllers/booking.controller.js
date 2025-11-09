import Listing from "../Model/listing.model.js";
const bookingController = async (req, res) => {
  try {
    const result = await Listing.findByIdAndUpdate(
      req.body.propertyID,
      { booked: true },
      { new: true }
    );
    res.json(result.booked);
    // console.log(result);
  } catch (err) {
    console.log(err);
  }
};
export default bookingController;
