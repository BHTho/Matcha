/*** Contains the logic to register a user, login a user, and get user data ***/

const { PasswordValidator } = require("password-validator-pro");
//Password options = https://medium.com/@mkparuchisom/enhance-your-node-js-app-security-with-password-validator-pro-b83c8a41cfbe

//Importing necessary modules
const bcrypt = require("bcrypt"); //Cryptographic library for hashing passwords
const jwt = require("jsonwebtoken"); //JWT
const usersdb = require("../models/users/usersdb"); //Importing the users database model

const validator = new PasswordValidator({
  minLength: 8,
  maxLength: 20,
  uppercase: 1,
  lowercase: 1,
  digits: 1,
  specialCharacters: 1,
  spaces: 0,
});

const signup = async (req, res) => {
  console.log("Request body:", req.body);
  try {
    const { username, email, password } = req.body;
    const result = validator.validate(password); //Checking if the password respect the rules of pwd validator
    if (!result.valid) {
      console.log("Password validation failed:", result.errors);
      return res.status(400).json({
        message: "Password validation failed",
        errors: result.errors.message, //TO DO : a afficher (ne marche pas pour l'instant)
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Data to be saved:", username, email, hashedPassword);
    const user = await usersdb.createUser({
      username: username,
      email: email,
      password: hashedPassword,
    });
    // Check if user was not created
    if (!user) {
      return res.status(400).json({ message: "User creation failed" });
    }
    //If the user is created successfully, we generate a JWT token and set it as a cookie
    if (user) {
      if (!process.env.JWT_SECRET) {
        console.log("JWT_SECRET is not defined in environment variables.");
        return res
          .status(500)
          .json({ message: "Internal server error: JWT secret not set." });
      }
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: 5 * 60,
      }); //Creating a JWT token for 5 minutes
      res.cookie("token", token, { httpOnly: true, maxAge: 1 * 24 * 60 * 60 });
      console.log("user", JSON.stringify(user, null, 2)); //Logging the user data to the console
      console.log("token", token);
      const userToReturn = {
        user_id: user.user_id,
        username: user.username,
        email: user.email,
        created_at: user.createdAt,
        updated_at: user.updatedAt,
      };
      console.log("User to return:", userToReturn);
      return res.status(201).json(userToReturn); //Sending the user data as a response, without the password
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      console.log("Username or password not provided");
      return res.status(400).json({ message: "All fields are required" });
    }

    //User check
    const user = await usersdb.findUserByUsername(username);
    if (!user) {
      console.log("User not found:", username);
      return res.status(404).json({ message: "User not found" });
    }
    if (user) {
      console.log("User found:", user);
      //Pwd check
      const isSame = await bcrypt.compare(password, user.password);
      console.log("Password match:", isSame);
      // If the password matches, we generate a JWT token and set it as a cookie
      if (isSame) {
        if (!process.env.JWT_SECRET) {
          console.log("JWT_SECRET is not defined in environment variables.");
          return res
            .status(500)
            .json({ message: "Internal server error: JWT secret not set." });
        }
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
          expiresIn: 5 * 60, // Token expires in 5 minutes
        });
        console.log("Token generated:", token);
        res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });

        const userToReturn = {
          user_id: user.user_id,
          username: user.username,
          email: user.email,
          created_at: user.createdAt,
          updated_at: user.updatedAt,
        };
        console.log("User to return:", userToReturn);
        return res.status(200).json({ user: userToReturn, token }); // Envoie les données au client
      } else {
        console.log("Authentication failed ; password does not match");
        return res.status(401).json({ message: "Authentication failed" });
      }
    } else {
      console.log("Authentication failed ; user not found");
      return res
        .status(401)
        .json({ message: "Authentication failed : user not found" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  signup,
  login,
};
