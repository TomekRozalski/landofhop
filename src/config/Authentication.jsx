import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { differenceInSeconds, fromUnixTime } from 'date-fns';
import jwt from 'jsonwebtoken';

import { constants, serverCall } from 'utils';
import { NavigationContext } from './Navigation';

export const AuthenticationContext = React.createContext({});

const Authentication = ({ children }) => {
	const { setLoginbar, setNavbar } = useContext(NavigationContext);

	const [tokenExpiration, setTokenExpiration] = useState(null);
	const [token, setToken] = useState(null);
	const [isLoggedIn, setLoggedIn] = useState(false);

	const setLogout = () => {
		setToken(null);
		setTokenExpiration(null);
		setLoggedIn(false);
	};

	const checkTokenExpiration = (value) => {
		console.log('value', value);
		const decodedToken = jwt.decode(value, { complete: true });

		if (decodedToken) {
			const expirationDate = fromUnixTime(decodedToken.payload.exp);

			if (differenceInSeconds(expirationDate, new Date()) > 10) {
				console.log('-->', differenceInSeconds(expirationDate, new Date()));
				setToken(value);
				setTokenExpiration(expirationDate);
				setLoggedIn(true);
				setLoginbar(false);

				window.localStorage.setItem('token', value);
				return true;
			}

			setLogout();
			setNavbar(true);
			setLoginbar(true);
			return false;
		}

		setLogout();
		// setAppError('appError.invalidToken');
		return false;
	};

	const logIn = async (formValues) => {
		const rawResponse = await serverCall({
			type: constants.api_endpoints.login,
			body: JSON.stringify(formValues),
		});

		if (rawResponse.status === 200) {
			const response = await rawResponse.json();
			checkTokenExpiration(response.token);
		} else {
			setLogout();
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
	};

	useEffect(() => {
		const storageToken = window.localStorage.getItem('token');

		if (storageToken) {
			checkTokenExpiration(storageToken);
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
