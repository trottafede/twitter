const express = require("express");
const router = express.Router();
const tweetController = require("../controllers/tweetController");

router.post("/create", tweetController.newTweet);

module.exports = router;
