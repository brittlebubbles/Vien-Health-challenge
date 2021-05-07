const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const isEmailExist = await User.findOne({ email: req.body.email });
    if (isEmailExist) {
      return res.status(400).json({ error: "Incorrect email / Password" });
    }

    if (!req.body.email) {
      return res.status(400).send("Bad Request");
    }
    if (!req.body.password) {
      return res.status(400).send("Bad Request");
    }

    const newUser = await User.create(req.body);
    const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: 86400, // expires in 24 hours
    });
    res.status(201).json({
      newUser,
      token: token,
    });
  } catch {
    // console.log(err);
    return res.status(400);
  }
};

exports.login = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({
      email,
    });

    if (!user)
      return res.status(400).json({
        message: "Email Or Password doesnt match",
      });

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.status(200).json({
      token: token,
      email: user.email,
      name: user.name,
      id: user._id,
    });
  } catch (err) {
    console.log(err);
  }
};
