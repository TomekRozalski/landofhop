import React, { useContext } from 'react';

import { NavigationContext } from 'config';
import { NavBar, TopBar } from './index';

const Header = () => {
	const { loginbar, navbar } = useContext(NavigationContext);

	return (
		<>
			<TopBar />
			<NavBar />
		</>
	);
};

export default Header;
