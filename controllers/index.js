const db = require('./../models');
const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.render('index');
});

// Trips
router.get('/trips', function(req, res) {
  db.Trip.findAll()
  .then((trips) => {
    res.render('trips/index', {
      trips: trips
    });
  });
});

router.get('/trips/:id', function(req, res) {
  db.Trip.findById(req.params.id)
  .then((trip) => {
    res.render('trips/show', {
      trip: trip
    });
  });
});

module.exports = router;