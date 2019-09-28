import React from 'react';
import styled from 'styled-components';

import {
	grids,
	indexes,
	sizes,
} from 'utils/theme';
// import { Logo, NavigationSwitcher, SearchbarSwitcher } from './index';

const Wrapper = styled.header`
	display: block;
	width: 100%;
	height: ${sizes.navbar.height}px;
	overflow: hidden;
	padding: 30px 0;
	z-index: ${indexes.navbar};
	position: fixed;
	top: 0;
	left: 0;
`;

const HeaderContainer = styled.div`
	/* ${grids.headerGrid} */
	/* grid-template-rows: ${sizes.topbar.height}px; */
	color: white;
`;

const NavBar = () => (
	<Wrapper>
		<HeaderContainer>
			Navbar


  				</HeaderContainer>
	</Wrapper>
);

export default NavBar;
