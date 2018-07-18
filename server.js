"use strict";

require('dotenv').load();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3000;

// middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// grab routes
const sampleRoute = require('./routes/sampleRoute');

// exploringtech.org
app.use('/', sampleRoute);

app.listen(port, function () {
    console.log('listening on port ' + port);
});