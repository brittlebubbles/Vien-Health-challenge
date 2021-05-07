const express = require("express");
const authController = require("../controllers/authController");
const profileController = require("../controllers/profileController");

const verifyToken = require("../middleware/getCurrentUser");

//Initialize Router
const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/profile", verifyToken, profileController.profile);

module.exports = router;
