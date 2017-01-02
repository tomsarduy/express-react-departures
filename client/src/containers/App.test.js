import { shallow } from 'enzyme';
import App from  './App';
import React from 'react';

describe('Containers', () => {
	describe('<App/>', () => {

		// we use an empty store since we already tested the store in index.test.js
		const app = shallow(<App store={{}}/>);

		it('Should have a store prop', () => {
			expect(app.prop('store')).toBeDefined();
		})

		it('Should render a Provider', () => {
			expect(app.find('Provider').length).toBe(1);
			expect(app.find('Provider').props('store')).toBeDefined();
		})

		it('Should render the AppRouter component', () => {
			expect(app.find('AppRouter').length).toBe(1);
			expect(app.find('AppRouter').props('store')).toBeDefined();

		})
	})
})