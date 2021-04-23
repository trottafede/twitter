const express = require("express");
const Tweet = require("../models/Tweet");
const User = require("../models/User");
const router = express.Router();

module.exports = {
  tweetList: router.get("/", async (req, res) => {
    const tweets = await Tweet.find()
    .populate("user")
    .limit(20)
    .sort({ createdAt: "desc" });
  res.render("home", { tweets });

  }),
};
/* 

module.exports = {
  index: async function (req, res) {
    const users = await User.find({ _id: { $ne: req.user._id } }).limit(4);
    const tweets = await Tweet.find()
    
  },
};
 */