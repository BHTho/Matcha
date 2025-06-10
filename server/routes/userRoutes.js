const express = require("express");
const userController = require("../controllers/userController");
const userAuth = require("../middleware/userAuth");
const router = express.Router();
const { checkToken } = require("../middleware/userAuth");

//Creating the endpoints
router.post("/signup", userAuth.saveUser, userController.signup); // Route for user signup with duplicates check

router.post("/login", userController.login); // Route for user login

router.get("/check-token", checkToken, (req, res) => {
  res.status(200).json({ isValid: true, user: req.user, message: "Token is valid", user: req.user });
}
);
module.exports = router;
