import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { differenceInSeconds, fromUnixTime } from 'date-fns';
import jwt from 'jsonwebtoken';

import { constants } from '../utils';
import { AppErrorContext } from './AppError';
import { NavigationContext } from './Navigation';

export const AuthenticationContext = React.createContext({});

const Authentication = ({ children }) => {
	const { setAppError } = useContext(AppErrorContext);
	const { navbar, setLoginbar, setNavbar } = useContext(NavigationContext);

	const [tokenExpiration, setTokenExpiration] = useState(null);
	const [token, setToken] = useState(null);

	const logOut = () => {
		if (window.localStorage.getItem('token')) {
			window.localStorage.removeItem('token');
		}

		setLoginbar(false);
		setTokenExpiration(null);
		setToken(null);
	};

	const authenticateToken = (value) => {
		fetch(constants.servers.data + constants.api_endpoints.authenticate_token, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${value}`,
			},
		})
			.then(res => res.json())
			.then((data) => {
				if (data.message === constants.server_responses.authentication_secceeded) {
					setToken(value);
					return true;
				}

				logOut();
				return false;
			})
			.catch((error) => {
				setAppError(error.message);
				return false;
			});
	};

	const checkTokenExpiration = (value) => {
		const decodedToken = jwt.decode(value, { complete: true });

		if (decodedToken) {
			const expirationDate = fromUnixTime(decodedToken.payload.exp);

			if (differenceInSeconds(expirationDate, new Date()) > 10) {
				setTokenExpiration(expirationDate);
				return true;
			}

			setToken(false);
			setTokenExpiration(false);
			setNavbar(true);
			setLoginbar(true);
			return false;
		}

		setToken(false);
		setAppError('appError.invalidToken');
		return false;
	};

	const logIn = formValues => (
		new Promise((resolve, reject) => {
			fetch(constants.servers.data + constants.api_endpoints.login, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json; charset=utf-8',
				},
				body: JSON.stringify(formValues),
			})
				.then(res => res.json())
				.then(({ message, token: tokenFromResponse }) => {
					if (message === constants.server_responses.authentication_secceeded) {
						window.localStorage.setItem('token', tokenFromResponse);
						checkTokenExpiration(tokenFromResponse);

						setToken(tokenFromResponse);
						setLoginbar(false);

						resolve();
					} else {
						reject();
					}
				})
				.catch((error) => {
					setAppError(error.message);
					reject();
				});
		})
	);

	useEffect(() => {
		const storageToken = window.localStorage.getItem('token');

		if (storageToken) {
			const tokenIsNotExpired = checkTokenExpiration(storageToken);

			if (tokenIsNotExpired) {
				authenticateToken(storageToken);
			}
		} else {
			setToken(false);
		}
	}, []);

	useEffect(() => {
		if (!navbar && token) {
			checkTokenExpiration(token);
		}
	}, [navbar]);

	return (
		<AuthenticationContext.Provider
			value={{
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
