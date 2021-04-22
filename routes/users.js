const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.showSignIn);

router.get("/signIn", userController.showSignIn);
router.post("/signIn", userController.validateSignIn);

router.get("/signUp", userController.showSignUp);
router.post("/signUp", userController.validateSignUp);

module.exports = router;
