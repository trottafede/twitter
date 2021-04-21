const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/register", (req, res) => {
  res.render("registro");
});

router.post("/register", async (req, res) => {
  const users = new User(req.body);
  await users.save();
  res.render("registro");
});

module.exports = router;
