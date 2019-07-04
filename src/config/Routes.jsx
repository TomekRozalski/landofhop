import React, { Suspense, lazy, useContext } from 'react';
import PropTypes from 'prop-types';
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom';
import NProgress from 'nprogress';
import styled from 'styled-components';
import { isDate } from 'lodash';

import { Header, Navbar } from 'main/top';
import { colors, GlobalStyle } from 'utils/theme';
import { ContentWrapper, ErrorMessage, Spinner } from 'elements';
import { AuthenticationContext } from './index';

export const AddNewBeverage = lazy(() => {
	NProgress.start();
	return import('../dashboard/AddNewBeverage').finally(NProgress.done);
});

export const UpdateBeverage = lazy(() => {
	NProgress.start();
	return import('../dashboard/UpdateBeverage').finally(NProgress.done);
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
		<Route
			{...rest}
			render={(props) => {
				if (token && isDate(tokenExpiration)) {
					return <Component {...props} />;
				}

				if (token === null) {
					return <Spinner center />;
				}

				return <Redirect to="/" />;
			}}
		/>
	);
};

PrivateRoute.propTypes = {
	component: PropTypes.node.isRequired,
};

const Wrapper = styled.div`
	border: 3rem solid ${colors.gray[100]};
`;

const Routes = () => (
	<Router>
		<Wrapper>
			<Header />
			<Navbar />
			<ContentWrapper>
				<Suspense fallback={<Spinner center />}>
					<Switch>
						<Route path="/" exact component={Tiles} />
						<Route path="/details/:shortId/:brand/:badge" exact component={Details} />
						<Route path="/contact" exact component={Contact} />
						<PrivateRoute path="/add-new-beverage" exact component={AddNewBeverage} />
						<PrivateRoute path="/update-beverage/:shortId/:brand/:badge" exact component={UpdateBeverage} />
						<Route component={NotFound} />
					</Switch>
				</Suspense>
			</ContentWrapper>
			<ErrorMessage />
			<GlobalStyle />
		</Wrapper>
	</Router>
);

export default Routes;
