import {createStore, applyMiddleware} from 'redux';
import {apiMiddleware} from 'redux-api-middleware';
import createLogger from 'redux-logger';
import reducers from './reducers';

const logger = createLogger();

export default createStore(reducers, applyMiddleware(apiMiddleware, logger));