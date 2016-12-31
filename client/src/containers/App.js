import React from 'react';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {apiMiddleware} from 'redux-api-middleware';
import createLogger from 'redux-logger';

import AppRouter from '../router'
import reducers from '../reducers';

const logger = createLogger();

const store = createStore(reducers, applyMiddleware(apiMiddleware, logger));

const App = () => (
	<Provider store={store}>
		<AppRouter store={store} />
	</Provider>
)

export default App;