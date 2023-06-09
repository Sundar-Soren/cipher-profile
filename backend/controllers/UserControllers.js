const IUser = require("../models/UserModels");

//Registration

exports.userRegistration = async (req, res) => {
  try {
    const { email } = req.body;

    let user = await IUser.findOne({ email });

    if (user) {
      return res.status(401).json({
        error: "User Already Exist",
      });
    }
    user = await IUser.create(req.body);

    const token = user.getJWTToken();

    res
      .status(200)
      .cookie("token", token, {
        expires: new Date(
          Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 100
        ),
        httpOnly: true,
      })
      .json({
        success: true,
        token,
        user,
      });
  } catch (error) {
    res.status(401).json({
      success: false,
      error: error.message,
    });
  }
};

//Login User

exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        error: "Please Enter Email and Password",
      });
    }
    const user = await IUser.findOne({ email });

    if (!user) {
      return res.status(401).json({
        error: "User Not Exist",
      });
    }
    const isPasswordMatch = await user.comparePassword(password);
    if (!isPasswordMatch) {
      return res.status(401).json({
        error: "Password Not Match",
      });
    }

    const token = user.getJWTToken();

    res
      .status(200)
      .cookie("token", token, {
        expires: new Date(
          Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 100
        ),
        httpOnly: true,
      })
      .json({
        success: true,
        token,
        user,
      });
  } catch (error) {
    res.status(401).json({
      success: false,
      error: error.message,
    });
  }
};

//Logout User

exports.userLogout = (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
  });
  res.status(200).json({
    success: true,
    message: "Logged Out Successfully",
  });
};

//Get User Details

exports.getLoggedInUser = async (req, res) => {
  try {
    const user = await IUser.findById(req.user.id);
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(401).json({
      error: error.message,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updateUser = await IUser.findByIdAndUpdate(req.user.id, req.body, {
      new: true,
    });
    return res.status(200).json({
      updateUser,
    });
  } catch (error) {
    return res.status(401).json({
      error: error.message,
    });
  }
};
exports.updatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword) {
      return res.status(400).json({
        error: "Please Enter old Password and new Password",
      });
    }
    const user = req.user;
    const isPasswordMatch = await user.comparePassword(oldPassword);
    console.log("isPasswordMatch");
    if (!isPasswordMatch) {
      return res.status(401).json({
        error: "Old Password Not Match",
      });
    }

    user.password = req.body.newPassword;
    await user.save();
    return res.status(200).json({
      message: "Password changed successfully",
    });
  } catch (error) {
    return res.status(501).json({
      error: "Failed to change the password",
    });
  }
};

exports.getFollowers = async (req, res) => {
  try {
    const followers = await IUser.find({ _id: { $in: req.user.followers } });
    res.json(followers);
  } catch (error) {
    return res.status(401).json({
      error: error.message,
    });
  }
};
