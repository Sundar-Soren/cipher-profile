const express = require("express");
const {
  userRegistration,
  userLogin,
  userLogout,
  getLoggedInUser,
  updateUser,
} = require("../controllers/UserControllers");
const { isAuthenticated } = require("../middlewares/AuthMiddlewares");
const router = express.Router();

//Auth
router.post("/signup", userRegistration);
router.post("/login", userLogin);
router.get("/logout", userLogout);

//Logged user
router.get("/me", isAuthenticated, getLoggedInUser);
router.put("/user/update", isAuthenticated, updateUser);

module.exports = router;
