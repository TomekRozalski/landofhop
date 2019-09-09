import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useCookies } from 'react-cookie';

import { constants, serverCall } from 'utils';
import { NavigationContext } from './Navigation';

export const AuthenticationContext = React.createContext({});

const Authentication = ({ children }) => {
	const { setLoginbar, setNavbar } = useContext(NavigationContext);
	const [cookies] = useCookies(['session_auth']);

	const [isLoggedIn, setLoggedIn] = useState(false);

	const logIn = async (formValues) => {
		const response = await serverCall({
			type: constants.api_endpoints.login,
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
			},
			body: JSON.stringify(formValues),
		});

		if (response.status === 200) {
			setLoggedIn(true);
			setLoginbar(false);
		} else {
			setLoggedIn(false);
		}
	};

	const logOut = () => (
		serverCall({ type: constants.api_endpoints.logout })
			.then(() => {
				setLoggedIn(false);
				setLoginbar(false);
				setNavbar(false);
			})
	);

	const checkCookie = () => {
		if (cookies.session_auth) {
			serverCall({
				type: constants.api_endpoints.auth,
			})
				.then(({ status }) => {
					if (status === 200) {
						setNavbar(false);
					}
					setLoggedIn(status === 200);
				})
				.catch(() => {
					setLoggedIn(false);
				});
		} else {
			setLoggedIn(false);
		}
	};

	useEffect(checkCookie, []);

	return (
		<AuthenticationContext.Provider
			value={{
				isLoggedIn,
				logIn,
				logOut,
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
