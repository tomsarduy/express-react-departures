import { mount } from 'enzyme';
import {ServiceDetails} from  './ServiceDetails';
import StationList from  '../components/ServiceDetails/StationList';
import React from 'react';

describe('Containers', () => {

	describe('<TrainServices/>', () => {
		const mockData = {"stops":[{"estimatedAt":"On time","scheduledTime":"20:18","isOrigin":true,"isDestination":false,"hasDeparted":true,"hasArrived":false,"stationName":"Huddersfield","stationCode":"HUD"},{"estimatedAt":"On time","scheduledTime":"20:21","isOrigin":false,"isDestination":false,"hasDeparted":true,"hasArrived":true,"stationName":"Lockwood","stationCode":"LCK"},{"estimatedAt":"On time","scheduledTime":"20:24","isOrigin":false,"isDestination":false,"hasDeparted":true,"hasArrived":true,"stationName":"Berry Brow","stationCode":"BBW"},{"estimatedAt":"On time","scheduledTime":"20:27","isOrigin":false,"isDestination":false,"hasDeparted":true,"hasArrived":true,"stationName":"Honley","stationCode":"HOY"},{"estimatedAt":"On time","scheduledTime":"20:30","isOrigin":false,"isDestination":false,"hasDeparted":true,"hasArrived":true,"stationName":"Brockholes","stationCode":"BHS"},{"estimatedAt":"On time","scheduledTime":"20:34","isOrigin":false,"isDestination":false,"hasDeparted":true,"hasArrived":true,"stationName":"Stocksmoor","stationCode":"SSM"},{"estimatedAt":"On time","scheduledTime":"20:36","isOrigin":false,"isDestination":false,"hasDeparted":true,"hasArrived":true,"stationName":"Shepley","stationCode":"SPY"},{"estimatedAt":"20:43","scheduledTime":"20:41","isOrigin":false,"isDestination":false,"hasDeparted":true,"hasArrived":true,"stationName":"Denby Dale","stationCode":"DBD"},{"estimatedAt":"On time","scheduledTime":"20:52","isOrigin":false,"isDestination":false,"hasDeparted":true,"hasArrived":true,"stationName":"Penistone","stationCode":"PNS"},{"estimatedAt":"On time","scheduledTime":"20:57","isOrigin":false,"isDestination":false,"hasDeparted":true,"hasArrived":true,"stationName":"Silkstone Common","stationCode":"SLK"},{"estimatedAt":"On time","scheduledTime":"21:01","isOrigin":false,"isDestination":false,"hasDeparted":true,"hasArrived":true,"stationName":"Dodworth","stationCode":"DOD"},{"estimatedAt":"On time","scheduledTime":"21:12","isOrigin":false,"isDestination":false,"hasDeparted":false,"hasArrived":true,"stationName":"Barnsley","stationCode":"BNY"},{"estimatedAt":"On time","scheduledTime":"21:17","isOrigin":false,"isDestination":false,"hasDeparted":false,"hasArrived":false,"stationName":"Wombwell","stationCode":"WOM"},{"estimatedAt":"On time","scheduledTime":"21:24","isOrigin":false,"isDestination":false,"hasDeparted":false,"hasArrived":false,"stationName":"Chapeltown (South Yorks)","stationCode":"CLN"},{"estimatedAt":"On time","scheduledTime":"21:31","isOrigin":false,"isDestination":false,"hasDeparted":false,"hasArrived":false,"stationName":"Meadowhall","stationCode":"MHS"},{"estimatedAt":"On time","scheduledTime":"21:42","isOrigin":false,"isDestination":false,"hasDeparted":false,"hasArrived":false,"stationName":"Sheffield","stationCode":"SHF"},{"estimatedAt":"On time","scheduledTime":"21:48","isOrigin":false,"isDestination":false,"hasDeparted":false,"hasArrived":false,"stationName":"Darnall","stationCode":"DAN"},{"estimatedAt":"On time","scheduledTime":"21:53","isOrigin":false,"isDestination":false,"hasDeparted":false,"hasArrived":false,"stationName":"Woodhouse","stationCode":"WDH"},{"estimatedAt":"On time","scheduledTime":"22:00","isOrigin":false,"isDestination":false,"hasDeparted":false,"hasArrived":false,"stationName":"Kiveton Bridge","stationCode":"KIV"},{"estimatedAt":"On time","scheduledTime":"22:03","isOrigin":false,"isDestination":false,"hasDeparted":false,"hasArrived":false,"stationName":"Kiveton Park","stationCode":"KVP"},{"estimatedAt":"On time","scheduledTime":"22:08","isOrigin":false,"isDestination":false,"hasDeparted":false,"hasArrived":false,"stationName":"Shireoaks","stationCode":"SRO"},{"estimatedAt":"On time","scheduledTime":"22:14","isOrigin":false,"isDestination":false,"hasDeparted":false,"hasArrived":false,"stationName":"Worksop","stationCode":"WRK"},{"estimatedAt":"On time","scheduledTime":"22:28","isOrigin":false,"isDestination":true,"hasDeparted":false,"hasArrived":false,"stationName":"Retford","stationCode":"RET"}],"origin":"Huddersfield","destination":"Retford","operator":"Northern Rail"}
		const props = {
			data: mockData,
			fetchService: jest.fn(),
			params: {
				departureId: 'WAT'
			}
		}

		let serviceDetails = mount(
			<ServiceDetails {...props} />
		);

		it('should render without crashing', () => {
			expect(serviceDetails.length).toEqual(1);
		})

		it('should fetch service details when did mount', () => {
			expect(props.fetchService.mock.calls.length).toBe(1)
		})

		it('should render StationList when data is available', () => {
			serviceDetails = mount(
				<ServiceDetails {...props} />
			);
			expect(serviceDetails.find(StationList).length).toBe(1)
		})

		it('should show spinner when loading', () => {
			serviceDetails = mount(
				<ServiceDetails {...props} showSpinner={true} />
			);

			expect(serviceDetails.find('.spinner').length).toBe(1);
		})

		it('Should manage errors', () => {

			serviceDetails = mount(
				<ServiceDetails {...props} error={true} errorMessage="Error Message" />
			);

			expect(serviceDetails.find('ErrorMessage').length).toBe(1);
		})

	})

});