import React, { useContext } from 'react';

import { NavigationContext } from 'config';
import { Logo, NavigationSwitcher, SearchbarSwitcher } from './index';
import { HeaderContainer, Wrapper } from './elements';

const TopBar = () => {
	const { loginbar, navbar } = useContext(NavigationContext);

	return (
		<Wrapper withLoginbar={loginbar} withNavbar={navbar}>
			<HeaderContainer>
				<Logo />
				<SearchbarSwitcher />
				<NavigationSwitcher />
			</HeaderContainer>
		</Wrapper>
	);
};

export default TopBar;
