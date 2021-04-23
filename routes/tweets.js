const express = require("express");
const User = require("../models/User");
const Tweet = require("../models/Tweet");
const router = express.Router();
const userController = require("../controllers/userController");
const tweetController = require("../controllers/tweetController");

router.post("/create", tweetController.newTweet);

module.exports = router;
