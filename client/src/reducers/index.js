
import {combineReducers} from 'redux';
import ServiceDetails from './ServiceDetails';
import TrainServices from './TrainServices';
import DeparturesSelect from './DeparturesSelect';
import {routerReducer} from 'react-router-redux';

export default combineReducers({
	ServiceDetails,
	TrainServices,
	DeparturesSelect,
	routing: routerReducer
});