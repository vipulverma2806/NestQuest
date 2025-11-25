import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    reviewText: {
      type: String,
      required: true,
    },

    reviewer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    propertyID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Listing",
    },
  },
  { timestamps: true }
);

const Review = mongoose.model("Review", reviewSchema);
export default Review;
