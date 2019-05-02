import React from 'react';
import { Provider } from 'react-redux';

import store from 'store/store';
import {
	AppError,
	Authentication,
	BeverageDetails,
	Device,
	Dictionary,
	Language,
	Navigation,
	Routes,
} from './index';

const GlobalStateProvider = () => (
	<Provider store={store}>
		<Device>
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
		</Device>
	</Provider>
);

export default GlobalStateProvider;
