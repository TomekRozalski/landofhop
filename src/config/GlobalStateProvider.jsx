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

const GlobalStateProvider = () => (
	<Provider store={store}>
		<Language>
			<AppError>
				<Navigation>
					<Authentication>
						<Dictionary>
							<BeverageDetails>
								<Routes />
							</BeverageDetails>
						</Dictionary>
					</Authentication>
				</Navigation>
			</AppError>
		</Language>
	</Provider>
);

export default GlobalStateProvider;
