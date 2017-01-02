import { shallow } from 'enzyme';
import ListHeader from  './ListHeader';
import React from 'react';
import {Link} from 'react-router';

describe('ListHeader', () => {
	//const response = {"origin":"Bedford","destination":"Brighton (East Sussex)","operator":"Thameslink"};
	const props = {
		origin:"Bedford",
		destination:"Brighton (East Sussex)",
		operator:"Thameslink",
		from:"BFR"
	}

	const header = shallow(<ListHeader {...props}/>);

	it('should render without crashing', () => {
		expect(header.length).toBe(1);
	})

	it('should show the train icon', () => {
		expect(header.find('img.list-header__icon').length).toBe(1);
	})
	
	it('should have class .list-header', () => {
		expect(header.find('.list-header').length).toBe(1);
	})

	it('Should link to service list', () => {
		expect(header.find(Link).prop('to')).toBe("/BFR");
	})
})