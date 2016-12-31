"use strict";

var rp = require('request-promise');
var parser = require('../common/api-parser');
var stations = require('../common/stations');


function checkStationCode(req, res, next, stationCode){

	var station = stations.getStation(stationCode);

	// if the station is not valid, 404
	if(!station){
		return res.status('404').json({error: 'Not Found'});
	}
	
	// attach station code
	req.station = station;
	next();
}

function fetchDepartures(req, res, next) {

	// fetch realtime api using request-promise
	const options = {
		uri: 'https://realtime.thetrainline.com/departures/'+ req.station.crs+ '?ExpectedWindow=120',
		// parse the response using custom parser
		transform: (data) => parser.trainServicesParser(data, req.station),
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

function getDepartures(req, res, next) {

	res.json({
		origin: req.station,
		services: req.data
	});
}

function getStations(req, res, next) {

	res.json(stations.stationsList);
}

module.exports = {
	checkStationCode,
	fetchDepartures,
	getDepartures,
	getStations
};