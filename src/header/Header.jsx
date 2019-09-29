import React, { useContext } from 'react';

import { NavigationContext } from 'config';
import { LoginBar, NavBar, TopBar } from './index';

const Header = () => {
	const { loginbar, navbar } = useContext(NavigationContext);

	return (
		<>
			<TopBar />
			<NavBar />
			{ loginbar && <LoginBar /> }
		</>
	);
};

export default Header;
