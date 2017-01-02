import { shallow } from 'enzyme';
import ServiceItem from  './ServiceItem';
import React from 'react';
import {Link} from 'react-router';

function setup(type='onTime') {

	const serviceMocks = {
		cancelled: {"destination":"Llandovery","due":"6:12","platform":"-","operator":"Arriva Trains Wales","date":"2017-01-02","serviceId":"P72216","status":"Cancelled"},
		onTime: {"destination":"Haslemere","due":"5:00","platform":"12A","operator":"South West Trains","date":"2017-01-02","serviceId":"Q25042","status":"On time"},
		delayed: {"destination":"Haslemere","due":"5:00","platform":"-","operator":"South West Trains","date":"2017-01-02","serviceId":"Q25042","status":"Delayed"},
		expectedAt: {"destination":"Haslemere","due":"5:00","platform":"-","operator":"South West Trains","date":"2017-01-02","serviceId":"Q25042","status":"04:55"}
	}

	const props = serviceMocks[type];

  	const enzymeWrapper = shallow(<ServiceItem {...props} from="WAT" />)

	return {
		props,
		enzymeWrapper
	}
}


describe('Components', () => {

	describe('<ServiceItem/>', () => {
		
		it('should render without crashing', () => {
			const {enzymeWrapper} = setup();
			expect(enzymeWrapper.length).toBe(1);
		})
		
		it('should contain a valid link to serviceDetails', () => {
			const {enzymeWrapper} = setup();
			expect(enzymeWrapper.find(Link).prop('to')).toBe("/WAT/Q25042/2017-01-02");
		})

		it('should show all the props', () => {
			const {enzymeWrapper} = setup();
			expect(enzymeWrapper.find('.service-item').length).toBe(1);
			expect(enzymeWrapper.find('time.service-item__due').length).toBe(1);
			expect(enzymeWrapper.find('.service').length).toBe(1);

			expect(enzymeWrapper.find('.service-item__due').text()).toBe('5:00');
			expect(enzymeWrapper.find('.service-item__subtitle').text()).toBe('South West Trains');
			expect(enzymeWrapper.find('.service-item__title').text()).toBe('Haslemere');
		})

		it('should show <abbr> is there is platform number', () => {
			const {enzymeWrapper} = setup();
			expect(enzymeWrapper.find('.service-item__platform > abbr').text()).toBe('Plat. ');
		})

		it('should show text and conditional classes when service status on-time', () => {
			const {enzymeWrapper} = setup();
			expect(enzymeWrapper.find('.service-item__status.service-item__status--on-time').text()).toBe('On time');
			expect(enzymeWrapper.find('.service-item__status > abbr').length).toBe(0);
		})

		it('should show text and conditional classes when service status delayed', () => {
			const {enzymeWrapper} = setup('delayed');
			expect(enzymeWrapper.find('.service-item__status.service-item__status--delayed').text()).toBe('Delayed');
			expect(enzymeWrapper.find('.service-item__status > abbr').length).toBe(0);
		})

		it('should show text and conditional classes when service status cancelled', () => {
			const {enzymeWrapper} = setup('cancelled');
			expect(enzymeWrapper.find('.service-item__status.service-item__status--cancelled').text()).toBe('Cancelled');
			expect(enzymeWrapper.find('.service-item__status > abbr').length).toBe(0);
		})

		it('should show <abbr> and conditional classes when estimate time provided', () => {
			const {enzymeWrapper} = setup('expectedAt');
			expect(enzymeWrapper.find('.service-item__status').text()).toBe('Exp.04:55');
			expect(enzymeWrapper.find('abbr').length).toBe(1);
			expect(enzymeWrapper.find('abbr').text()).toBe('Exp.');
		})

	})

})