import * as actionTypes from '../constants/actionTypes';

export default (state = {}, action) => {
	
	switch(action.type){

		case actionTypes.FETCH_DEPARTURES:
			return {
				...state, 
				showSpinner: true,
				error: false,
				errorMessage: ''
			}
		case actionTypes.RELOAD_DEPARTURES:
			return {
				...state,
				showSpinner: false,
			}

		case actionTypes.RECEIVE_DEPARTURES:
			return {
				...state, 
				showSpinner: false,
				data: action.payload.services,
				origin: action.payload.origin
			}
		case actionTypes.ERROR_FETCH_DEPARTURES:
			return {
				...state,
				showSpinner: false,
				error: action.error,
				errorMessage: action.payload.statusText
			}
		default:
			return state;
	}
}