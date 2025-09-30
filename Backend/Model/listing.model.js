import mongoose from "mongoose";

const listingSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  img1: {
    type: String,
    required: true,
  },
  img2: {
    type: String,
    required: true,
  },
  img3: {
    type: String,
    required: true,
  },
  rent: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  landmark: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Listing = mongoose.model("Listing", listingSchema);
export default Listing;
