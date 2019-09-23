import React from 'react';
import { Provider } from 'react-redux';

import store from 'store/store';
import {
	AppError,
	Authentication,
	BeverageDetails,
	DetailsControlPanel,
	Device,
	Dictionary,
	Language,
	Navigation,
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
				<AppError />,
				<Navigation />,
				<ScrollPosition />,
				<Authentication />,
				<Dictionary />,
				<BeverageDetails />,
				<DetailsControlPanel />,
			]}
		>
			<Routes />
		</ProviderComposer>

	</Provider>
);

export default GlobalStateProvider;
