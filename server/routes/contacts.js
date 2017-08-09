var express = require('express');
var router = express.Router();
var config = require('../config.js');
var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;

var contacts;
mongoClient.connect(config.mongodbUrl, function(err, db) {
  if (err) throw err;
  contacts = db.collection('contacts');
});

router.get('/', function(req, res, next) {
    contacts.find().toArray(function(err, docs) {
        if (err) throw err;
        res.json(docs);
    });
});

router.post('/', function(req, res, next) {
    contacts.save(req.body, function(err, result) {
        if (err) throw err;
        res.json(req.body);
    });
});

router.put('/', function(req, res, next) {
    contacts.updateOne(
        { _id: new mongodb.ObjectID(req.body._id },
        { '$set': req.body },
        function(err, result) {
            if (err) throw err;
            res.json(req.body);
        }
    )
});

router.delete('/', function(req, res, next) {
    contacts.deleteOne(
        { _id: new mongodb.ObjectID(req.body._id) },
        function(err, result) {
            if (err) throw err;
            res.json(req.body);
        }
    )
});

module.exports = router;