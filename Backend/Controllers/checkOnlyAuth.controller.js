const checkOnlyAuth = (req, res) => {
  res.json(200).status("Authentication Approved");
};
export default checkOnlyAuth;
