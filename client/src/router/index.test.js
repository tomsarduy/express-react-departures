import React from 'react';
import store from '../configureStore';
import { shallow } from 'enzyme';
import AppRouter from  './index';

describe('App Router', () => {
	const router = shallow(<AppRouter store={store}/>);
	
	it('should render without crashing', () => {
		expect(router.length).toBe(1);
	})

	it('should contain 2 routes', () => {
		expect(router.find('Route').first().children().length).toEqual(2);
	})

	it('should has a history property', () => {
		expect(router.find('Router').prop('history')).toBeDefined();
	})

	it('Each route should have path and component props', () => {
		router.find('Route').forEach((route) => {
			expect(route.prop('path')).toBeDefined();
			expect(route.prop('component')).toBeDefined();
		})
	})
})