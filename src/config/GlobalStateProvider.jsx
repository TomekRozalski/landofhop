import React from 'react';
import { Provider } from 'react-redux';

import store from 'store/store';
import {
	Dictionary,
	Language,
	Navigation,
	Routes,
} from './index';

const GlobalStateProvider = () => (
	<Provider store={store}>
		<Language>
			<Navigation>
				<Dictionary>
					<Routes />
				</Dictionary>
			</Navigation>
		</Language>
	</Provider>
);

export default GlobalStateProvider;
