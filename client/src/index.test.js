import React from 'react';
import App from './containers/App';
import { shallow } from 'enzyme';
import {createStore} from 'redux';
import reducers from './reducers';

describe('Index', () =>{

	const store = createStore(reducers);
	const app = shallow(<App store={store}/>);

	it('Render without crashing', () => {
		expect(app.length).toBe(1);
	})

	it('Render the App with a redux store', () => {
		expect(app.prop('store')).toBeDefined();
		expect(app.prop('store')).toEqual(store);
	})
});
