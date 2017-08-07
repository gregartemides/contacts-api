var express = require('express');
var router = express.Router();

router.use('/contacts', require('./contacts.js'));

module.exports = router;