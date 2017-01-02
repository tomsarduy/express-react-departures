import React from 'react';
import ReactDOM from 'react-dom';
import store from './configureStore';
import App from './containers/App';

ReactDOM.render((
	<App store={store} />
	), document.getElementById('root') 
);