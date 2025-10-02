import Listing from "../Model/listing.model.js";

const getAll = async (req, res) => {
  try {
    const allProperties = await Listing.find();
    res.json(allProperties);
  } catch (err) {
    console.log(err);
  }
};
export default getAll;
