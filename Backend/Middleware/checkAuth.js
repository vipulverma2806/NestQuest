import User from "../Model/user.model.js";
import jwt from "jsonwebtoken";
const checkAuth = async (req, res, next) => {
  console.log("cookies are :", req.cookies);
  const decode = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
  console.log("decode checkauth", decode);
  try {
    const user = await User.findById(decode.id);
    req.id = user.id;
    next();
  } catch (err) {
    console.log("check error", err);
    res.json("Authentication failed");
  }
};
export default checkAuth;
