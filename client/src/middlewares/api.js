import * as actionTypes from '../constants/actionTypes';
import {CALL_API} from 'redux-api-middleware';

// Fetch departures from a given station
export const fetchService = (serviceId, date, reload=false) => {

	let fetchType = actionTypes.FETCH_SERVICE;

	// Dispatch reload if it's just updating the current view
	// so we don't show the spinner
	if(reload){
		fetchType = actionTypes.RELOAD_SERVICE;
	}

	return {
		[CALL_API]: {
			endpoint: `/api/services/${serviceId}/${date}`,
			method: 'GET',
			types : [
				fetchType, 
				actionTypes.RECEIVE_SERVICE, 
				actionTypes.ERROR_FETCH_SERVICE
			]
		}
	}
}

// Fetch departures from a given station
export const fetchDepartures = (from, reload=false) => {

	if(!from){
		return;
	}
	
	let fetchType = actionTypes.FETCH_DEPARTURES;

	// Dispatch reload if it's just updating the current view
	// so we don't show the spinner
	if(reload){
		fetchType = actionTypes.RELOAD_DEPARTURES;
	}

	return {
		[CALL_API]: {
			endpoint: `/api/departures/${from}`,
			method: 'GET',
			types: [
				{
					type: fetchType,
					payload: from
				},
				actionTypes.RECEIVE_DEPARTURES, 
				actionTypes.ERROR_FETCH_DEPARTURES
			]
		}
	}
}

// Fetch train stations list
export const fetchStations = () => {

	return {
		[CALL_API]: {
			endpoint: '/api/departures',
			method: 'GET',
			types: [
				actionTypes.FETCH_STATIONS,
				actionTypes.RECEIVE_STATIONS, 
				actionTypes.ERROR_FETCH_STATIONS
			]
		}
	}
}