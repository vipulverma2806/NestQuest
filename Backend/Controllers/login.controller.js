import User from "../Model/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const login = async (req, res) => {
  const JWT_SECRET = process.env.JWT_SECRET;
  console.log(req.body);
  const { email, password } = req.body;
  try {
    const found = await User.findOne({ email });
    if (!found) return res.status(401).json("NA");
    const compare = await bcrypt.compare(password, found.password);
    if (!compare) return res.status(401).json("NA");
    const token = jwt.sign({ id: found._id }, JWT_SECRET, {
      expiresIn: "1d",
    });
    res.cookie("token", token);
    res
      .status(200)
      .json({ msg: "success", email: found.email, name: found.name });
  } catch (err) {
    console.log(err);
  }
};
export default login;
