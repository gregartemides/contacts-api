'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;

// setup bodyParser to parse the body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// setup CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// get the routes
app.use('/api', require('./routes/api.js'));

// start the server
app.listen(port);
console.log('Listening on ' + port);