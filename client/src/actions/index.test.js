import * as actionTypes from '../constants/actionTypes';
import {selectStation} from './index';

describe('actions', () => {
	it('should select a station on click', () => {

		const station = {
			value: 'WAT',
			label: 'London Waterloo'
		};

		const expectedAction = {
			station: station && station.value,
			type: actionTypes.SELECT_STATION
		}

		expect(selectStation(station)).toEqual(expectedAction)
	})
})