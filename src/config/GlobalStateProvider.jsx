import React from 'react';
import { Provider } from 'react-redux';

import store from 'store/store';
import {
	Authentication,
	BeverageDetails,
	DetailsControlPanel,
	Device,
	Dictionary,
	Language,
	Navigation,
	Notification,
	Routes,
	ScrollPosition,
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
				<Device />,
				<Language />,
				<Dictionary />,
				<Notification />,
				<Navigation />,
				<ScrollPosition />,
				<Authentication />,
				<BeverageDetails />,
				<DetailsControlPanel />,
			]}
		>
			<Routes />
		</ProviderComposer>

	</Provider>
);

export default GlobalStateProvider;
