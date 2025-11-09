import User from "../Model/user.model.js";
import jwt from "jsonwebtoken";
const getUserData = async (req, res) => {
  // console.log(req.id);

  try {
    const userData = await User.findById(req.id)
      .select("-password")
      .populate("listing");
    //   .populate("listing");
    // res.json(user.name);

    // console.log("uerdata", userData);
    res.status(201).json(userData);
  } catch (err) {
    console.log(err);
  }
};
export default getUserData;
