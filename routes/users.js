const express = require("express");
const User = require("../models/User");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/register", (req, res) => {
  res.render("registro");
});

router.post("/register", userController.newRegister);

module.exports = router;
