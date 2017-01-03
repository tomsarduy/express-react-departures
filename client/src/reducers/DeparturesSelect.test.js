import reducer from './DeparturesSelect';
import * as actionTypes from '../constants/actionTypes';
import * as actions from '../actions';

describe('DeparturesSelect Reducer', () => {

	it('when no action it should return an empty object', () => {
		const state = reducer(undefined, {});
		expect(state).toEqual({});
	})

	it('should show spinner when loading stations', () => {
		const state = reducer({}, {
			type: actionTypes.FETCH_STATIONS,
		})

		expect(state).toEqual({showSpinner:true})
	})
	
	it('should show error when fetch fails', () => {
		const state = reducer({}, {
			type: actionTypes.ERROR_FETCH_STATIONS,
			error: true,
		})

		expect(state.showSpinner).toEqual(false);
		expect(state.error).toEqual(true);
		expect(state.errorMessage).toBeDefined();
	})
		
	it('should select a station when SELECT_STATION is dispatched', () => {
		const state = reducer({}, actions.selectStation({
			value: 'WAT',
			label: 'London Waterloo'
		}))

		expect(state.selected).toBeDefined()
	})


	it('should set selected station when type is FETCH_DEPARTURES as well', () => {
		const state = reducer({
			selected: {
				value: 'AAA',
				label: 'Another Station'
			}
		}, 
		{
			type: actionTypes.FETCH_DEPARTURES,
			payload: {
				value: 'WAT',
				label: 'London Waterloo'
			}
			
		})

		expect(state.selected).toEqual({
			value: 'WAT',
			label: 'London Waterloo'
		})
	})
	
})