import React from 'react';
import { Provider } from 'react-redux';

import store from 'store/store';
import {
	AppError,
	Authentication,
	BeverageDetails,
	Dictionary,
	Language,
	Navigation,
	Routes,
} from './index';

const ProviderComposer = ({ contexts, children }) => (
	contexts.reduceRight(
		(kids, parent) => React.cloneElement(parent, {
			children: kids,
		}),
		children,
	)
);

const GlobalStateProvider = () => (
	<Provider store={store}>
		<ProviderComposer
			contexts={[
				<Language />,
				<AppError />,
				<Navigation />,
				<Authentication />,
				<Dictionary />,
				<BeverageDetails />,
			]}
		>
			<Routes />
		</ProviderComposer>
	</Provider>
);

export default GlobalStateProvider;
