import * as actionTypes from '../constants/actionTypes';

export default (state = {}, action) => {
	
	switch(action.type){

		case actionTypes.FETCH_SERVICE:
			return { 
				...state,
				showSpinner: true
			}

		case actionTypes.RELOAD_SERVICE:
			return {
				...state,
				showSpinner: false,
			}

		case actionTypes.RECEIVE_SERVICE:
			return { 
				...state, 
				showSpinner: false,
				data: action.payload,
			}

		case actionTypes.ERROR_FETCH_SERVICE:
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