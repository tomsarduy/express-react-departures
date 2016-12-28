'use strict';

var express = require('express');
var router = express.Router();
var servicesHandler = require('./handler');

/* GET departures listing. */
router.get('/:serviceId/:serviceDate', servicesHandler.validateCallingPattern, servicesHandler.fetchService, servicesHandler.getService);

module.exports = router;