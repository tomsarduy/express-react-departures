import { shallow } from 'enzyme';
import StationList from  './StationList';
import StationPoint from  './StationPoint';
import ListHeader from  './ListHeader';
import React from 'react';

describe('Components', () => {

	describe('<StationList/>', () => {
		const stops = [{"estimatedAt":"On time","scheduledTime":"15:49","isOrigin":true,"isDestination":false,"hasDeparted":true,"hasArrived":false,"stationName":"Edinburgh","stationCode":"EDB"},{"estimatedAt":"On time","scheduledTime":"15:53","isOrigin":false,"isDestination":false,"hasDeparted":true,"hasArrived":true,"stationName":"Haymarket","stationCode":"HYM"},{"estimatedAt":"On time","scheduledTime":"15:58","isOrigin":false,"isDestination":false,"hasDeparted":false,"hasArrived":false,"stationName":"South Gyle","stationCode":"SGL"},{"estimatedAt":"On time","scheduledTime":"16:00","isOrigin":false,"isDestination":false,"hasDeparted":false,"hasArrived":false,"stationName":"N/A","stationCode":"EGY"},{"estimatedAt":"On time","scheduledTime":"16:06","isOrigin":false,"isDestination":false,"hasDeparted":false,"hasArrived":false,"stationName":"Dalmeny","stationCode":"DAM"},{"estimatedAt":"On time","scheduledTime":"16:09","isOrigin":false,"isDestination":false,"hasDeparted":false,"hasArrived":false,"stationName":"North Queensferry","stationCode":"NQU"},{"estimatedAt":"On time","scheduledTime":"16:13","isOrigin":false,"isDestination":false,"hasDeparted":false,"hasArrived":false,"stationName":"Inverkeithing","stationCode":"INK"},{"estimatedAt":"On time","scheduledTime":"16:17","isOrigin":false,"isDestination":false,"hasDeparted":false,"hasArrived":false,"stationName":"Rosyth","stationCode":"ROS"},{"estimatedAt":"On time","scheduledTime":"16:22","isOrigin":false,"isDestination":false,"hasDeparted":false,"hasArrived":false,"stationName":"Dunfermline Town","stationCode":"DFE"},{"estimatedAt":"On time","scheduledTime":"16:25","isOrigin":false,"isDestination":false,"hasDeparted":false,"hasArrived":false,"stationName":"Dunfermline Queen Margaret","stationCode":"DFL"},{"estimatedAt":"On time","scheduledTime":"16:32","isOrigin":false,"isDestination":false,"hasDeparted":false,"hasArrived":false,"stationName":"Cowdenbeath","stationCode":"COW"},{"estimatedAt":"On time","scheduledTime":"16:37","isOrigin":false,"isDestination":false,"hasDeparted":false,"hasArrived":false,"stationName":"Lochgelly","stationCode":"LCG"},{"estimatedAt":"On time","scheduledTime":"16:41","isOrigin":false,"isDestination":false,"hasDeparted":false,"hasArrived":false,"stationName":"Cardenden","stationCode":"CDD"},{"estimatedAt":"On time","scheduledTime":"16:49","isOrigin":false,"isDestination":true,"hasDeparted":false,"hasArrived":false,"stationName":"Glenrothes with Thornton","stationCode":"GLT"}];
		const props = {
			stops,
			origin: "Edinburgh",
			destination:"Glenrothes with Thornton",
			operator:"First Scotrail",
			params: {
				departureId: 'LCG',
				serviceId: 'G82566'
			}
		}

		let stationsList = shallow(<StationList {...props} />);
		
		it('should render without crashing', () => {
			expect(stationsList.length).toBe(1);
			expect(stationsList.find('.station-list').length).toBe(1);
		})

		it('it should contain ListHeader', () => {
			expect(stationsList.find(ListHeader).length).toEqual(1);
		})

		it('it should render a <StationPoint> list', () => {
			expect(stationsList.find(StationPoint).length).toEqual(props.stops.length);
		})


	})

})