import React, { useContext } from 'react';

import { NavigationContext } from 'config';
import { LogoLink, LogoTitle } from './elements';

const Logo = () => {
	const { setLoginbar, setNavbar } = useContext(NavigationContext);

	return (
		<LogoLink onClick={() => { setNavbar(false); setLoginbar(false); }} to="/">
			<LogoTitle>Land of Hop</LogoTitle>
		</LogoLink>
	);
};

export default Logo;
