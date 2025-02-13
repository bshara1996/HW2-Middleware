const checkAdmin = (req, res, next) => {
  const user = req.query.user;
  if (user !== "admin") {
    return res.status(403).send("Access Denied");
  }
  next(); // If permissions continue to next request.
};

module.exports = checkAdmin;
