import User from "../Model/user.model.js";
import jwt from "jsonwebtoken";
const getUserData = async (req, res) => {
  console.log(req.id);

  try {
    const userData = await User.findById(req.id);
    //   .select("-password")
    //   .populate("listing");
    // res.json(user.name);
  } catch (err) {
    console.log(err);
  }
};
export default getUserData;
