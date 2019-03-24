import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const NavigationContext = React.createContext({});

const Navigation = ({ children }) => {
	const [loginbar, setLoginbar] = useState(false);
	const [navbar, setNavbar] = useState(false);

	const toggleNavbar = () => {
		setNavbar(!navbar);
	};

	return (
		<NavigationContext.Provider
			value={{
				loginbar,
				navbar,
				setLoginbar,
				setNavbar,
				toggleLoginbar: () => setLoginbar(!loginbar),
				toggleNavbar,
			}}
		>
			{ children }
		</NavigationContext.Provider>
	);
};

Navigation.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Navigation;
