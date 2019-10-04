import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
	differenceInMinutes,
	differenceInSeconds,
	formatDistanceStrict,
	fromUnixTime,
} from 'date-fns';
import jwt from 'jsonwebtoken';

import pl from 'date-fns/locale/pl';

import { constants, serverCall } from 'utils';
import { NavigationContext, NotificationContext } from './index';

export const AuthenticationContext = React.createContext({});

const Authentication = ({ children }) => {
	const { notify } = useContext(NotificationContext);
	const { setLoginbar, setNavbar } = useContext(NavigationContext);

	const [tokenExpiration, setTokenExpiration] = useState(null);
	const [token, setToken] = useState(null);
	const [isLoggedIn, setLoggedIn] = useState(false);

	const setLogout = () => {
		setToken(null);
		setTokenExpiration(null);
		setLoggedIn(false);
	};

	useEffect(() => {
		let timeout;

		if (tokenExpiration) {
			timeout = setTimeout(() => {
				const diff = differenceInMinutes(
					new Date(tokenExpiration),
					new Date(),
				);

				if (diff < 15) {
					notify({
						id: 'tokenExpiresIn',
						type: constants.notify.type.info,
						values: {
							diff: formatDistanceStrict(
								new Date(tokenExpiration),
								new Date(),
								{ addSuffix: true, locale: pl },
							),
						},
					});
				}
			}, 5 * 60 * 1000);
		} else {
			clearTimeout(timeout);
		}

		return () => {
			clearTimeout(timeout);
		};
	}, [tokenExpiration]);

	const checkTokenExpiration = (value, type) => {
		const decodedToken = jwt.decode(value, { complete: true });

		if (decodedToken) {
			const expirationDate = fromUnixTime(decodedToken.payload.exp);

			if (differenceInSeconds(expirationDate, new Date()) > 10) {
				notify({
					id: type === 'init' ? 'tokenExpiresIn' : 'loggedIn',
					type: constants.notify.type.success,
					values: {
						diff: formatDistanceStrict(
							new Date(expirationDate),
							new Date(),
							{ addSuffix: true, locale: pl },
						),
					},
				});

				setToken(value);
				setTokenExpiration(expirationDate);
				setLoggedIn(true);
				setLoginbar(false);

				window.localStorage.setItem('token', value);
				return true;
			}

			notify({
				id: 'tokenExpired',
				type: constants.notify.type.warning,
				values: {
					diff: formatDistanceStrict(
						new Date(expirationDate),
						new Date(),
						{ addSuffix: true, locale: pl },
					),
				},
			});

			setLogout();
			setNavbar(true);
			setLoginbar(true);
			return false;
		}

		setLogout();
		notify({
			id: 'invalidToken',
			type: constants.notify.type.warning,
		});

		return false;
	};

	const logIn = async (formValues) => {
		const rawResponse = await serverCall({
			type: constants.api_endpoints.login,
			body: JSON.stringify(formValues),
		});

		if (rawResponse.status === 200) {
			const response = await rawResponse.json();
			checkTokenExpiration(response.token, 'login');
		} else {
			setLogout();
			notify({
				id: 'wrongLoginAttempt',
				type: constants.notify.type.warning,
			});
		}

		return rawResponse.status;
	};

	const logOut = () => {
		if (window.localStorage.getItem('token')) {
			window.localStorage.removeItem('token');
		}

		setLogout();
		setLoginbar(false);
		setNavbar(false);

		notify({
			id: 'successfullyLoggedOut',
			type: constants.notify.type.success,
		});
	};

	useEffect(() => {
		const storageToken = window.localStorage.getItem('token');

		if (storageToken) {
			checkTokenExpiration(storageToken, 'init');
		}
	}, []);

	return (
		<AuthenticationContext.Provider
			value={{
				isLoggedIn,
				logIn,
				logOut,
				token,
				tokenExpiration,
			}}
		>
			{ children }
		</AuthenticationContext.Provider>
	);
};

Authentication.propTypes = {
	children: PropTypes.node,
};

Authentication.defaultProps = {
	children: null,
};

export default Authentication;
