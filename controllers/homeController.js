const express = require("express");
const Tweet = require("../models/Tweet");
const User = require("../models/User");
const router = express.Router();

const logout = async (req, res) => {
  req.logout();
  res.redirect("/");
};

module.exports = {
  tweetList: router.get("/", async (req, res) => {
    console.log("Logeado como: " + req.user);
    const user = req.user;

    const tweets = await Tweet.find()
      .populate("user")
      .limit(20)
      .sort({ createdAt: "desc" });
    console.log(tweets);
    res.render("home", { tweets, user });
  }),
  logout,
};
/* 

module.exports = {
  index: async function (req, res) {
    const users = await User.find({ _id: { $ne: req.user._id } }).limit(4);
    const tweets = await Tweet.find()
    
  },
};
 */
