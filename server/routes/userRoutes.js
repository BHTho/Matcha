const express = require("express");
const userController = require("../controllers/userController");
const userAuth = require("../middleware/userAuth");
const router = express.Router();

//Creating the endpoints
router.post("/signup", userAuth.saveUser, userController.signup); // Route for user signup with duplicates check

router.post("/login", userController.login); // Route for user login

module.exports = router;
