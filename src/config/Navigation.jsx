import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const NavigationContext = React.createContext({});

const Navigation = ({ children }) => {
	const [loginbar, setLoginbar] = useState(false);
	const [navbar, setNavbar] = useState(false);
	const [searchbar, setSearchbar] = useState(false);

	return (
		<NavigationContext.Provider
			value={{
				loginbar,
				navbar,
				searchbar,
				setLoginbar,
				setNavbar,
				setSearchbar,
				toggleLoginbar: () => setLoginbar(!loginbar),
				toggleNavbar: () => setNavbar(!navbar),
			}}
		>
			{ children }
		</NavigationContext.Provider>
	);
};

Navigation.propTypes = {
	children: PropTypes.node,
};

Navigation.defaultProps = {
	children: null,
};

export default Navigation;
