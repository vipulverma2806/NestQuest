import User from "../Model/user.model.js";
import vipul from "bcryptjs";
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashed = await vipul.hash(password, 10);
    const regInfo = await User.create({ name, email, password: hashed });
    // console.log(regInfo);
    res.status(200).json("successful");
  } catch (err) {
    console.log(err);
    res.json(err);
  }

  console.log(req.body);

  //   res.json("ok working");
};
export default register;
