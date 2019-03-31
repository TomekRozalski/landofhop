import React, { Suspense, lazy, useContext } from 'react';
import PropTypes from 'prop-types';
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom';
import NProgress from 'nprogress';
import { isDate } from 'lodash';

import { Header, Loginbar, Navbar } from 'main/top';
import { GlobalStyle } from 'utils/theme';
import { ContentWrapper, ErrorMessage, Spinner } from 'elements';
import { AuthenticationContext } from './index';

export const AddNewBeverage = lazy(() => {
	NProgress.start();
	return import('../dashboard/AddNewBeverage').finally(NProgress.done);
});

export const Contact = lazy(() => {
	NProgress.start();
	return import('../main/contact/Contact').finally(NProgress.done);
});

export const Details = lazy(async () => {
	NProgress.start();
	return import('../main/details/Details').finally(NProgress.done);
});

export const NotFound = lazy(() => {
	NProgress.start();
	return import('../main/notFound/NotFound').finally(NProgress.done);
});

export const Tiles = lazy(async () => {
	NProgress.start();
	return import('../main/tiles/Tiles').finally(NProgress.done);
});

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { token, tokenExpiration } = useContext(AuthenticationContext);

	return (
		token && isDate(tokenExpiration)
			? <Route {...rest} render={props => <Component {...props} />} />
			: <Redirect to="/" />
	);
};

PrivateRoute.propTypes = {
	component: PropTypes.node.isRequired,
};

const Routes = () => (
	<Router>
		<>
			<Navbar />
			<Loginbar />
			<Header />
			<ContentWrapper>
				<Suspense fallback={<Spinner center />}>
					<Switch>
						<Route path="/" exact component={Tiles} />
						<Route path="/details/:shortId/:brand/:badge" exact component={Details} />
						<Route path="/contact" exact component={Contact} />
						<PrivateRoute path="/add-new-beverage" exact component={AddNewBeverage} />
						<Route component={NotFound} />
					</Switch>
				</Suspense>
			</ContentWrapper>
			<ErrorMessage />
			<GlobalStyle />
		</>
	</Router>
);

export default Routes;
