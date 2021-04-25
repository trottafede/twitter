const Tweet = require("../models/Tweet");

const logout = async (req, res) => {
  req.logout();
  res.redirect("/");
};

const userHome = async (req, res) => {
  console.log("Logeado como: " + req.user);
  const user = req.user;

  const tweets = await Tweet.find({ author: req.user._id })
    .populate("user")
    .limit(20)
    .sort({ createdAt: "desc" });
  console.log(tweets);
  res.render("home", { tweets, user });
};

module.exports = {
  logout,
  userHome,
};
