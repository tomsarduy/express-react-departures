import { mount } from 'enzyme';
import {TrainServices} from  './TrainServices';
import ServiceList from  '../components/TrainServices/ServiceList';
import React from 'react';

describe('Containers', () => {

	describe('<TrainServices/>', () => {

		const departuresMock = [{"destination":"Liverpool Lime Street","due":"5:27","platform":"-","operator":"Virgin Trains","date":"2017-01-02","serviceId":"P51560","status":"On time"},{"destination":"Birmingham New Street","due":"5:34","platform":"-","operator":"London Midland","date":"2017-01-02","serviceId":"P47914","status":"On time"},{"destination":"Watford Junction","due":"5:37","platform":"-","operator":"N/A","date":"2017-01-02","serviceId":"F26381","status":"On time"}];

		const props = {
			fetchDepartures: jest.fn(),
			params: {
				departureId: 'WAT'
			}
		}

		let trainServices = mount(
			<TrainServices {...props} />
		);

		it('should render without crashing', () => {
			expect(trainServices.length).toEqual(1);
		})

		it('should load departures when did mount', () => {
			expect(props.fetchDepartures.mock.calls.length).toBe(1)
		})

		it('should render ServiceList when data is available', () => {
			trainServices = mount(
				<TrainServices {...props} data={departuresMock} />
			);
			expect(trainServices.find(ServiceList).length).toBe(1)
		})

		it('should show spinner when loading', () => {
			trainServices = mount(
				<TrainServices {...props} showSpinner={true} />
			);

			expect(trainServices.find('.spinner').length).toBe(1);
		})

		it('Should manage errors', () => {

			trainServices = mount(
				<TrainServices {...props} error={true} errorMessage="Error Message" />
			);

			expect(trainServices.find('ErrorMessage').length).toBe(1);
		})

	})

});