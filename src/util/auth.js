const status = require("http-status");

function auth(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res
      .status(status.BAD_REQUEST)
      .json({ message: "No token provided" });
  }

  try {
    const { SECRET } = process.env;
    const decodedToken = jwt.verify(token, SECRET);
    req.userData = { userId: decodedToken.userId, email: decodedToken.email };
    next();
  } catch (error) {
    return res.status(status.BAD_REQUEST).json({ message: "Invalid token" });
  }
}

module.exports = {
  auth,
};
