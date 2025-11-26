import Review from "../../Model/review.model.js";
const review = async (req, res) => {
  const { reviewText, propertyID } = req.body;
  const reviewer = req.id;
  try {
    const response = await Review.create({ reviewText, propertyID, reviewer });
    console.log(response);
    res.status(200).json("review added");
  } catch (err) {
    console.log(err);
  }
};

export const getReviews = async (req, res) => {
  const propertyID = req.params.propertyID;
  try {
    const reviews = await Review.find({ propertyID: propertyID }).populate("reviewer");
    console.log("yeh rha", reviews);
    res.json(reviews)
  } catch (err) {}
};

export default review;
