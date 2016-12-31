'use strict';

var express = require('express');
var router = express.Router();
var departuresHandler = require('./handler');

/* GET departures listing. */
router.get('/', departuresHandler.getStations);
router.get('/:stationCode', departuresHandler.fetchDepartures, departuresHandler.getDepartures);
router.param('stationCode', departuresHandler.checkStationCode);

module.exports = router;