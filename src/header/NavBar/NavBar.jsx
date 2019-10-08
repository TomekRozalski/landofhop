import React, { useContext } from 'react';
import styled from 'styled-components';

import { NavigationContext } from 'config';
import { NavBarContainer, Wrapper } from './elements';
import { Authorization, LangNavigation, ListOfLinks } from './index';

const MainNavigation = styled.div`
	display: flex;
`;

const NavBar = () => {
	const { navbar } = useContext(NavigationContext);

	return (
		<Wrapper isNavbar={navbar}>
			<NavBarContainer>
				<MainNavigation>
					<Authorization />
					<ListOfLinks />
				</MainNavigation>
				<LangNavigation />
			</NavBarContainer>
		</Wrapper>
	);
};

export default NavBar;
