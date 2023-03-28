const jwt = require("jsonwebtoken");
const IUser = require("../models/UserModels");
exports.isAuthenticated = async (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({
      status: false,
      error: "You Are Not Authorize To Access This Resource",
    });
  }

  try {
    const decodeToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await IUser.findById(decodeToken.id);
    next();
  } catch (error) {
    return res.status(401).json({
      error: "Some Problem in Cookies",
    });
  }
};
