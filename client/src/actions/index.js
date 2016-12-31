import * as actionTypes from '../constants/actionTypes';

export const selectStation = (station) => ({
	station: station && station.value,
	type: actionTypes.SELECT_STATION
})