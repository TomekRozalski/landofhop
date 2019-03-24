import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NProgress from 'nprogress';

import { Header, Loginbar, Navbar } from 'main/top';
import { GlobalStyle } from 'utils/theme';
import { ContentWrapper, ErrorMessage, Spinner } from 'elements';

export const Tiles = lazy(async () => {
	NProgress.start();
	return import('../main/tiles/Tiles').finally(NProgress.done);
});

// export const Details = lazy(async () => {
// 	NProgress.start();
// 	return import('../main/Details').finally(NProgress.done);
// });

export const Contact = lazy(() => {
	NProgress.start();
	return import('../main/Contact').finally(NProgress.done);
});

export const NotFound = lazy(() => {
	NProgress.start();
	return import('../main/NotFound').finally(NProgress.done);
});

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
						{/* <Route path="/details/:short_id/:brand/:badge" exact component={Details} /> */}
						<Route path="/contact" exact component={Contact} />
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
