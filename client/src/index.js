import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {apiMiddleware} from 'redux-api-middleware';
import createLogger from 'redux-logger';

import App from './containers/App';
import reducers from './reducers';

const logger = createLogger();
const store = createStore(reducers, applyMiddleware(apiMiddleware, logger));

ReactDOM.render((
	<App store={store} />
	), document.getElementById('root') 
);