import { mount } from 'enzyme';
import StationPoint from  './StationPoint';
import React from 'react';

describe('Components', () => {

	describe('<StationPoint/>', () => {
		const props = {
			estimatedAt:"On time",
			scheduledTime:"15:49",
			isOrigin:true,
			isDestination:false,
			hasDeparted:false,
			hasArrived:false,
			stationName:"Edinburgh",
			stationCode:"EDB",
			from: 'LCG'
		};

		let stationPoint = mount(<StationPoint {...props} />);
		
		it('should render without crashing', () => {
			expect(stationPoint.length).toBe(1);
			expect(stationPoint.find('li.station-point').length).toEqual(1);
		})
		
		it('should show Departed At abbr if estimatedAt has time format and train departed', () => {
			stationPoint = mount(<StationPoint {...props} estimatedAt="15:51" hasDeparted={true}/>);
			expect(stationPoint.find('abbr').length).toBe(1);
			expect(stationPoint.find('abbr').text()).toBe('Dep.');
		})
		
		it('should show Expected At abbr if estimatedAt has time format and train has not departed', () => {
			stationPoint = mount(<StationPoint {...props} estimatedAt="15:51" hasDeparted={false}/>);
			expect(stationPoint.find('abbr').length).toBe(1);
			expect(stationPoint.find('abbr').text()).toBe('Exp.');
		})

		it('css classes should reflect train status', () => {
			stationPoint = mount(<StationPoint {...props} estimatedAt="15:51" hasArrived={true} hasDeparted={false}/>);
			expect(stationPoint.find('.station-point').hasClass('station-point--current')).toBe(true);

			stationPoint = mount(<StationPoint {...props} hasArrived={true} hasDeparted={true} />);
			expect(stationPoint.find('.station-point').hasClass('station-point--current')).toBe(false);
			expect(stationPoint.find('.station-point').hasClass('station-point--departed')).toBe(true);
		})

		it('should highlight the departure station', () => {
			stationPoint = mount(<StationPoint {...props}  stationCode="LCG" from='LCG'/>);
			expect(stationPoint.find('.station-point').hasClass('station-point--from')).toBe(true);
			stationPoint = mount(<StationPoint {...props}  stationCode="WAT" from='LCG'/>);
			expect(stationPoint.find('.station-point').hasClass('station-point--from')).toBe(false);
		})

		it('should highlight origin and destination', () => {

			stationPoint = mount(<StationPoint {...props}  isOrigin={true} isDestination={false} />);
			expect(stationPoint.find('.station-point__circle').hasClass('station-point__circle--black')).toBe(true);

			stationPoint = mount(<StationPoint {...props} isOrigin={false}  isDestination={true} />);
			expect(stationPoint.find('.station-point__circle').hasClass('station-point__circle--black')).toBe(true);
		})

	})

})