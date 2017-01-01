import { shallow } from 'enzyme';
import Header from  './Header';
import React from 'react';

describe('Header', () => {
	
	const header = shallow(<Header/>);

	it('should render without crashing', () => {
		expect(header.length).toBe(1);
	})

	it('should show the trainline icon', () => {
		expect(header.find('img').length).toBe(1);
	})
	
	it('should have class .app-header', () => {
		expect(header.find('.app-header').length).toBe(1);
	})
})