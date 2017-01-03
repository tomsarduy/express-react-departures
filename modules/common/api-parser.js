var _  = require('lodash');
var stations = require('./stations');
var operators = require('./operators');

const formatTime = (date) => {
	
	if(!date){
		return '-';
	}
	var mins =  ('0'+date.getMinutes()).slice(-2);
	var hours = ('0'+date.getUTCHours()).slice(-2);
	return `${hours}:${mins}`;
}

const getScheduledTime = (stop) => {
	var scheduled = _.get(stop, 'departure.scheduled.scheduledTime', _.get(stop, 'arrival.scheduled.scheduledTime'));
	if(scheduled) {
		return new Date(scheduled);
	}

	return false;
}

const getStationStatus = (stop) => {

	// If Train is Cancelled
	const isCancelled = _.get(stop, 'departure.realTime.cancelled.isCancelled', _.get(stop, 'arrival.realTime.cancelled.isCancelled', false));
	if(isCancelled){
		return 'Cancelled';
	}

	const flag = _.get(stop, 'departure.realTime.realTimeServiceInfo.realTimeFlag', false);
	
	// If Train is delayed
	const isDelayed = !!(flag === 'Delayed');
	if(isDelayed){
		return 'Delayed';
	}

	// Expected time to arrive or departure
	let expected  = _.get(stop, 'departure.realTime.realTimeServiceInfo.realTime',  _.get(stop, 'arrival.realTime.realTimeServiceInfo.realTime'));
		expected = new Date(expected);

	const scheduled = getScheduledTime(stop);

	// Check difference in minutes
	const diff = Math.abs(scheduled - expected)/60000;
	return (diff > 1)? formatTime(expected): 'On time';
}

const getServiceStatus = (service) => {

	// If Train is Cancelled
	const isCancelled = _.get(service, 'realTimeUpdatesInfo.cancelled.isCancelled', false);
	if(isCancelled){
		return 'Cancelled';
	}

	const flag = _.get(service, 'realTimeUpdatesInfo.realTimeServiceInfo.realTimeFlag', false);
	
	// If Train is delayed
	const isDelayed = !!(flag === 'Delayed');
	if(isDelayed){
		return 'Delayed';
	}

	// Expected time to arrive or departure
	let expected = _.get(service, 'realTimeUpdatesInfo.realTimeServiceInfo.realTime');
		expected     = expected && new Date(expected);

	let scheduled = _.get(service, 'scheduledInfo.scheduledTime');
		scheduled     = scheduled && new Date(scheduled);

	// Check difference in minutes
	const diff = Math.abs(scheduled - expected)/60000;
	return (diff > 1)? formatTime(expected): 'On time';
}

const serviceDetailsParser = (data) => {
	
	const origin = _.get(data.service, 'serviceOrigins[0]', 'N/A');
	const destination = _.get(data.service, 'serviceDestinations[0]', 'N/A');

	const stops = data.service.stops.map(
		(stop) => {
			return {
				estimatedAt  :  	getStationStatus(stop),
				scheduledTime: 		formatTime(getScheduledTime(stop)),
				isOrigin     :  	_.get(stop, 'arrival.notApplicable', false),
				isDestination:  	_.get(stop, 'departure.notApplicable', false),
				hasDeparted  :  	_.get(stop, 'departure.realTime.realTimeServiceInfo.hasDeparted', false),
				hasArrived  :  		_.get(stop, 'arrival.realTime.realTimeServiceInfo.hasArrived', false),
				stationName  :  	stations.getStationName(stop.location.crs),
				stationCode  :  	_.get(stop, 'location.crs'),
			}
	});

	const res = {
		stops,
		origin: stations.getStationName(origin),
		destination: stations.getStationName(destination),
		operator: operators.getOperatorName(data.service.serviceOperator)
	};

	return Promise.resolve(res);
}

const trainServicesParser = (data, origin) => {
	
	const services = data.services
		.filter(
			// Remove Bus departures from the list
			// And train with destinations in the origin
			service => (service.transportMode === 'TRAIN' && _.get(service, 'destinationList[0].crs')!==origin.crs)
		)
		.map(
			service => {
				const crs = _.get(service, 'destinationList[0].crs');
				const destination = stations.getStationName(crs);

				const scheduledTime = _.get(service, 'scheduledInfo.scheduledTime');
				const due = formatTime(new Date(scheduledTime));

				const platform = _.get(service, 'realTimeUpdatesInfo.realTimeServiceInfo.realTimePlatform', '-');

				const serviceId = service.callingPatternUrl && service.callingPatternUrl.split('/')[4];
				const date = service.callingPatternUrl && service.callingPatternUrl.split('/')[5];

				const status = getServiceStatus(service);

				return {
					destination,
					due,
					platform,
					operator: operators.getOperatorName(service.serviceOperator),
					date,
					serviceId,
					status
				}
			}
		);
	services.departureId = origin.crs;
	return Promise.resolve(services);
}

module.exports = {
	serviceDetailsParser,
	trainServicesParser
};