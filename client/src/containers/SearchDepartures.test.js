import { mount } from 'enzyme';
import {SearchDepartures} from  './SearchDepartures';
import React from 'react';

describe('Containers', () => {
	describe('<SearchDepartures/>', () => {

		const props = {
			fetchStations: jest.fn()
		}

		let searchDepartures = mount(
			<SearchDepartures {...props} />
		);

		it('should render without crashing', () => {
			
			expect(searchDepartures.length).toEqual(1);
		})

		it('should load stations when did mount', () => {
			expect(props.fetchStations.mock.calls.length).toBe(1)
		})

		it('should show spinner when loading', () => {
			searchDepartures = mount(
				<SearchDepartures {...props} showSpinner={true} />
			);

			expect(searchDepartures.find('.spinner').length).toBe(1);
		})

		it('Should manage errors', () => {

			searchDepartures = mount(
				<SearchDepartures {...props} error={true} errorMessage="Error Message" />
			);

			expect(searchDepartures.find('ErrorMessage').length).toBe(1);
		})

	})

});