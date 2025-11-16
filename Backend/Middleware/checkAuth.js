import User from "../Model/user.model.js";
import jwt from "jsonwebtoken";
const checkAuth = async (req, res, next) => {
  console.log("cookies are :", req.cookies);

  if (!req.cookies.token) return res.status(404).json("No Token Login first");
  try {
    const decode = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
    // console.log("decode checkauth", decode);
    const user = await User.findById(decode.id);
    req.id = user.id;
    next();
  } catch (err) {
    console.log("error in checkAuth", err);
    res.status(401).json("Authentication failed");
  }

  // try {
  //   const user = await User.findById(decode.id);
  //   req.id = user.id;
  //   next();
  // } catch (err) {
  //   console.log("check error", err);
  //   res.json("Authentication failed");
  // }
};
export default checkAuth;
