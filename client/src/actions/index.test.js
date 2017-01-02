import * as actionTypes from '../constants/actionTypes';
import {selectStation} from './index';

describe('Actions', () => {

	it('should select a station', () => {

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