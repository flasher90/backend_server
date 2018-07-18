'use strict';

const express = require('express');
const router = express.Router();

// load api service
const dbService = require('../api/sample');

// example router that returns 200 status code and hello message
// localhost:3000/home
router.get('/home', function (req, res) {
    res.status(200).send("<h1>Hello world</h1>");
});

// example router that returns 200 status code and db key
// localhost:3000/db
router.get('/db', function (req, res) {
    res.status(200).send(dbService.db);
});


module.exports = router;