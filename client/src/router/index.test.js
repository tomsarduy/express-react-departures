import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {apiMiddleware} from 'redux-api-middleware';
import createLogger from 'redux-logger';

import { shallow } from 'enzyme';
import reducers from '../reducers';
import AppRouter from  './index';

const logger = createLogger();

describe('App Router', () => {
	const store = createStore(reducers, applyMiddleware(apiMiddleware, logger));
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