const express = require("express");
const User = require("../models/User");
const router = express.Router();

module.exports = {
  showHome: router.get("/", (req, res) => {
    res.render("home");
  }),

  showRegister: router.get("/register", (req, res) => {
    res.render("registro");
  }),

  newRegister: router.post("/register", async (req, res) => {
    const users = new User(req.body);
    await users.save();
    res.render("registro");
  }),
};
