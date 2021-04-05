'use strict';
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const User = require('../models/users-model.js');
module.exports = async (req, res, next) => {
    const encode = req.headers.authorization.slice(6);
    const decode = base64.decode(encode);
    const [username, password] = decode.split(':');
    try {
        const user = await User.findOne({ username });
        const valid = await bcrypt.compare(password, user.password);
        if (valid) {
            req.user = user
            next();
        } else {
            res.send('Invalid Login')
        }
    } catch (error) {
        res.send('Invalid Login')
    }
}