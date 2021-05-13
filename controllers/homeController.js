const Tweet = require("../models/Tweet");
const User = require("../models/User");

const showHome = async (req, res) => {
  // console.log("Logeado como: " + req.user);
  const user = req.user;

  const arrayDeTweets = await Tweet.find()
    .sort({ createdAt: -1 })
    .populate("author")
    .limit(20);

  res.json({ arrayDeTweets, user });
};

const logout = async (req, res) => {
  req.logout();
  res.redirect("/");
};

const userHome = async (req, res) => {
  console.log("Logeado como: " + req.user);
  const user = req.user;
  const usersToFollow = await User.find().sort({ createdAt: "asc" });

  const tweets = await Tweet.find({ author: req.user._id })
    .populate("user")
    .limit(20)
    .sort({ createdAt: "desc" });
  // console.log(tweets);
  res.render("userHome", { tweets, user, usersToFollow });
};

module.exports = {
  logout,
  userHome,
  showHome,
};
