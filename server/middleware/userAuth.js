const express = require("express");
const jwt = require("jsonwebtoken");
const usersdb = require("../models/users/usersdb");
const bcrypt = require("bcrypt");
//

//Function to check if the token is valid at each request qnd renew it if neede
function checkToken(req, res, next) {
  const token = req.cookies.token || req.cookies.jwt;
  if (!token) 
    return res.status(401).json({ message: 'No token was found' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const newToken = jwt.sign({ id: decoded.id }, process.env.JWT_SECRET, { expiresIn: 5 * 60 });
    res.cookie('jwt', newToken, { httpOnly: true, maxAge: 5 * 60 * 1000 });
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token expired or invalid' });
  }
}

const saveUser = async (request, response, next) => {
  try {
    const { username, email, password } = request.body;
    if (!username || !email || !password) {
      return response.status(400).json({ message: "All fields are required" });
    }
    //Check if the user to be created already exists in the database
    if (await usersdb.findUserByUsername(username)) {
      return response.status(400).json({ message: "Username already exists" });
    }
    if (await usersdb.findUserByEmail(email)) {
      return response.status(400).json({ message: "Email already exists" });
    }
    next(); //call login in usercotroller 
  } catch (error) {
    console.error("Error checking database", error);
    return response.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  saveUser, checkToken,
};
