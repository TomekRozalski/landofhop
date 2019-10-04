import React, { useContext } from 'react';

import { NavigationContext } from 'config';
import { LoginBar, NavBar, TopBar } from './index';

const Header = () => {
	const { loginbar } = useContext(NavigationContext);

	return (
		<>
			<TopBar />
			<NavBar />
			{ loginbar && <LoginBar /> }
		</>
	);
};

export default Header;
