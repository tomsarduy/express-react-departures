import { shallow } from 'enzyme';
import ServiceList from  './ServiceList';
import Service from  './ServiceItem';
import React from 'react';

describe('Components', () => {

	describe('<ServiceList/>', () => {
		const departuresResponse = {"origin":{"crs":"EUS","name":"London Euston"},"services":[{"destination":"Liverpool Lime Street","due":"5:27","platform":"-","operator":"Virgin Trains","date":"2017-01-02","serviceId":"P51560","status":"On time"},{"destination":"Birmingham New Street","due":"5:34","platform":"-","operator":"London Midland","date":"2017-01-02","serviceId":"P47914","status":"On time"},{"destination":"Watford Junction","due":"5:37","platform":"-","operator":"N/A","date":"2017-01-02","serviceId":"F26381","status":"On time"}]};

		const props = {
			departures: departuresResponse.services,
			departureId: departuresResponse.origin.crs
		}

		let departureList;
		
		it('should render without crashing', () => {
			departureList = shallow(<ServiceList {...props} />);
			expect(departureList.length).toBe(1);
		})

		it('if no departures it should show a warning', () => {
			departureList = shallow(<ServiceList departureId="EUS"/>);
			expect(departureList.find('.alert.alert-warning').length).toEqual(1);
			expect(departureList.find('.alert.alert-warning').text()).toEqual('No Services for EUS');
		})

		it('it should render a <Service> list', () => {
			departureList = shallow(<ServiceList {...props}/>);

			expect(departureList.find('ul.departures-list').length).toEqual(1);
			expect(departureList.find(Service).length).toEqual(props.departures.length);
		})


	})

})