const express = require("express");
const User = require("../models/User");
const Tweet = require("../models/User");
const router = express.Router();
const userController = require("../controllers/userController");
const homeController = require("../controllers/homeController");

/* router.get("/", (req, res) => {
  res.render("home");
}); */
router.get("/", homeController.tweetList);


router.get("/register", (req, res) => {
  res.render("registro");
});

router.post("/register", userController.newRegister);

module.exports = router;
