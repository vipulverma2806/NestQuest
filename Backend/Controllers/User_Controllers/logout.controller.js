const logout = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json("success");
};
export default logout;
