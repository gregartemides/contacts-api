'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;

// setup bodyParser to parse the body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// get the routes
app.use('/api', require('./routes/api.js'));

// start the server
app.listen(port);
console.log('Listening on ' + port);