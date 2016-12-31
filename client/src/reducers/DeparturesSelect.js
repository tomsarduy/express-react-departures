import * as actionTypes from '../constants/actionTypes';

export default (state = {}, action) => {
	
	switch(action.type){

		case actionTypes.FETCH_STATIONS:
			return {
				...state,
				showSpinner: true
			}		
		case actionTypes.RECEIVE_STATIONS:
			return {
				...state,
				showSpinner: false,
				stations: action.payload,
			}
		case actionTypes.ERROR_FETCH_STATIONS:
			return {
				...state,
				showSpinner: false,
				error: action.error,
				errorMessage: 'Error loading the departure stations'
			}
		case actionTypes.SELECT_STATION:
			return {
				...state, 
				selected: action.station
			}
		case actionTypes.FETCH_DEPARTURES:
			console.log(action);
			return {
				...state, 
				selected: action.payload
			}
		default:
			return state;
	}
}