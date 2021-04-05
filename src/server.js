'use strict';
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const notFound = require('./middleware/404.js');
const errorHandler = require('./middleware/500.js');
const Router = require('./auth/router.js');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());



app.use('/', Router);
app.use('*', notFound);
app.use(errorHandler);

module.exports = {
    server: app,
    start: (port) => {
        const PORT = port || 4000;
        app.listen(PORT, () => {
            console.log(`Heard from port ${PORT}`)
        });
    },
};