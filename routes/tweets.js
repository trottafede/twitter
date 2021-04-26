const express = require("express");
const router = express.Router();
const tweetController = require("../controllers/tweetController");

router.post("/create", tweetController.newTweet);
router.post("/like", tweetController.createLike);

module.exports = router;
