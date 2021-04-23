const express = require("express");
const User = require("../models/User");
const router = express.Router();

module.exports = {
  newRegister: router.post("/register", async (req, res) => {
    const users = new User(req.body);
    await users.save();
    res.render("registro");
  }),
};
