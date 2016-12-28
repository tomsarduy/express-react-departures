"use strict";

var rp = require('request-promise');
var parser = require('../common/api-parser');
var stations = require('../common/stations');

function validateCallingPattern(req, res, next) {

	if (req.params && req.params.serviceId && req.params.serviceDate) {
		return next();
	}

	res.status('404').json({error: 'Not Found'});
}

function fetchService(req, res, next) {

	// fetch realtime api using request-promise
	const options = {
		uri: `https://realtime.thetrainline.com/callingPattern/${req.params.serviceId}/${req.params.serviceDate}`,
		// parse the response using custom parser
		transform: parser.serviceDetailsParser,
		json: true
	};

	rp(options)
		.then((data) => {
			req.data = data;
			next();
		})
		.catch((err) => {
			res.send(err);
		})
}

function getService(req, res, next) {
	res.json(req.data);
}


module.exports = {
	validateCallingPattern,
	fetchService,
	getService
};