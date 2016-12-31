import React from 'react';

import Wrapper from '../components/Wrapper/Wrapper';
import ServiceDetails from '../containers/ServiceDetails';
import TrainServices from '../containers/TrainServices';

import {Router, Route, browserHistory} from 'react-router';
import { syncHistoryWithStore} from 'react-router-redux';

const AppRouter = ({store}) => (

	<Router history={syncHistoryWithStore(browserHistory, store)}>
		<Route path="/" component={Wrapper}>
			<Route path="/:departureId" component={TrainServices}/>
			<Route path="/:departureId/:serviceId/:date" component={ServiceDetails}/>
		</Route>
	</Router>
)

export default AppRouter;