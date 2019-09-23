import React, { Suspense, lazy, useContext } from 'react';
import PropTypes from 'prop-types';
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom';
import NProgress from 'nprogress';

import { TopBar } from 'navigation';
import { Navbar } from 'main/top';
import { constants } from 'utils';
import { GlobalStyle } from 'utils/theme';
import { ContentWrapper, ErrorMessage, Spinner } from 'elements';
import { AuthenticationContext } from './index';

export const AddNewBeverage = lazy(() => {
	NProgress.start();
	return import('../dashboard/beverage/AddNew').finally(NProgress.done);
});

export const UpdateBeverage = lazy(() => {
	NProgress.start();
	return import('../dashboard/beverage/Update').finally(NProgress.done);
});

export const UpdateBeverageImages = lazy(() => {
	NProgress.start();
	return import('../dashboard/images/Beverage').finally(NProgress.done);
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
	return import('../screens/Tiles/Tiles').finally(NProgress.done);
});

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { isLoggedIn } = useContext(AuthenticationContext);

	return (
		<Route
			{...rest}
			render={props => (isLoggedIn
				? <Component {...props} />
				: <Redirect to="/" />
			)}
		/>
	);
};

PrivateRoute.propTypes = {
	component: PropTypes.shape({}).isRequired,
};

const Routes = () => (
	<Router>
		<>
			<TopBar />
			<Navbar />
			<ContentWrapper>
				<Suspense fallback={<Spinner center />}>
					<Switch>
						<Route path={constants.routes.main} exact component={Tiles} />
						<Route path={`${constants.routes.details}/:shortId/:brand/:badge`} exact component={Details} />
						<Route path={constants.routes.contact} exact component={Contact} />
						<PrivateRoute path={constants.routes.addNewBeverage} exact component={AddNewBeverage} />
						<PrivateRoute path={`${constants.routes.updateBeverage}/:shortId/:brand/:badge`} exact component={UpdateBeverage} />
						<PrivateRoute path={`${constants.routes.updateBeverageImages}/:shortId/:brand/:badge`} exact component={UpdateBeverageImages} />
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
