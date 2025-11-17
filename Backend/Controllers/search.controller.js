import mongoose from "mongoose";
import Listing from "../Model/listing.model.js";

const search = async (req, res) => {
  console.log(req.query);
  const query = req.query.query;

  try {
    const searchResult = await Listing.find({
      $or: [
        { landmark: { $regex: query, $options: "i" } },
        { city: { $regex: query, $options: "i" } },
        { title: { $regex: query, $options: "i" } },
      ],
    });

    console.log(searchResult);
    res.status(200).json(searchResult);
  } catch (err) {
    console.log(err);
  }
};

export default search;
