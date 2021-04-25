const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const passport = require("passport");
const logedIn = require("../middlewares/loginControl");

const homeController = require("../controllers/homeController");

// router.get("/", logedIn, userController.showHome);
// router.get("/", logedIn, homeController.userHome);
router.get("/", logedIn, homeController.showHome);

router.get("/user", logedIn, homeController.userHome);

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

router.get("/editProfile", logedIn, userController.editProfile);
router.post("/editProfile", logedIn, userController.validateEditProfile);

router.get("/logout", logedIn, homeController.logout);

module.exports = router;
