import React from 'react';
import { store } from 'store';
import { WelcomeContainer } from 'containers';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

const history = syncHistoryWithStore(browserHistory, store);

export const Routes = (
	<Router history={history}>
		<Route path="/" component={WelcomeContainer} />
	</Router>
);
