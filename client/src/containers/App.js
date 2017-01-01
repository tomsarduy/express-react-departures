import React from 'react';
import {Provider} from 'react-redux';
import AppRouter from '../router'

export default ({store}) => (
	<Provider store={store}>
		<AppRouter store={store} />
	</Provider>
)