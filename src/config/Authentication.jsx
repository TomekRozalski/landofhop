import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import jwt from 'jsonwebtoken';

import { constants, dictionary } from '../utils';
import { AppErrorContext } from './AppError';
import { LanguageContext } from './Language';
import { NavigationContext } from './Navigation';

export const AuthenticationContext = React.createContext({});

const Authentication = ({ children }) => {
	const { setAppError } = useContext(AppErrorContext);
	const { language } = useContext(LanguageContext);
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
		fetch(constants.servers.main + constants.api_endpoints.authenticate_token, {
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
			const expirationDate = moment.unix(decodedToken.payload.exp);
			const now = moment();

			if (expirationDate.diff(now, 'seconds') > 10) {
				setTokenExpiration(expirationDate.toDate());
				return true;
			}

			setTokenExpiration(false);
			setNavbar(true);
			setLoginbar(true);
			return false;
		}

		setAppError(dictionary[language]['appError.invalidToken']);
		return false;
	};

	const logIn = formValues => (
		new Promise((resolve, reject) => {
			fetch(constants.servers.main + constants.api_endpoints.login, {
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
	children: PropTypes.node.isRequired,
};

export default Authentication;