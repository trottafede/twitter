const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const passport = require("passport");
const logedIn = require("../middlewares/loginControl");

router.get("/", logedIn, userController.showHome);

router.get("/signIn", userController.showSignIn);
router.post(
  "/signIn",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/signIn",
  })
);

router.get("/signUp", userController.showSignUp);
router.post("/signUp", userController.validateSignUp);

module.exports = router;
