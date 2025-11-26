const checkOnlyAuth = (req, res) => {
  res.status(200).json("Authentication Approved");
};
export default checkOnlyAuth;
