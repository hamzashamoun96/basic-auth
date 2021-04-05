'use strict'
const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const basicAuth = require('./middleware/basic.js')
const User = require('./models/users-model.js');
const router = express.Router();


router.post('/signup', signupHandler)
router.post('/signin', basicAuth, signinHandler)

async function signupHandler(req, res) {
    try {
        const username = req.body.username;
        const password = req.body.password;

        const hash = await bcrypt.hash(password, 7);
        const user = new User({ username, password: hash });
        const record = await user.save();
        res.status(201).json(record)
    } catch (error) {
        res.status(403).send("Error Creating User");
    }
}

async function signinHandler(req, res) {
    res.json(req.user)
}
module.exports = router;





