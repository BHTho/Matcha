const express = require('express');
const jwt = require('jsonwebtoken');
const db = require('../models');
const User = db.users;

//

const saveUser = async(request, response, next) => {
    try {
        // Check if the username already exists
        const usernameCheck = await User.findOne({
            where: {
                username: request.body.username
            },
        });
        if (usernameCheck) {
            return response.status(400).json({ message: 'Username already exists' });
        }

        // Check if the email already exists
        const emailCheck =
            await User.findOne({
                where: {
                    email: request.body.email
                },
            });
        if (emailCheck) {
            return response.status(400).json({ message: 'Email already exists' });
        }
        next();
    } 
    catch (error) {
        console.error('Error checking database', error);
        return response.status(500).json({ message: 'Internal server error' });
    }
};


module.exports = 
{
    saveUser,
};