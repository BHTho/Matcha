const express = require("express");
const jwt = require("jsonwebtoken");
const usersdb = require("../models/users/usersdb");
const bcrypt = require("bcrypt");
//

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
  saveUser,
};
