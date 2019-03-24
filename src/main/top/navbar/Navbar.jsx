import React from 'react';
import styled from 'styled-components';

import { grid } from 'utils';
import { gutters, indexes, mq } from 'utils/theme';
import { Menu, Search } from './fragments';

const Wrapper = styled.div`
	display: block;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: ${indexes.navbar};
`;

const NavbarContainer = styled.div`
	flex-wrap: wrap;
	height: ${gutters.navbarHeight.lg}px;
	margin-top: 1rem;
	${grid}

	${mq.md`
		margin-top: 0;
	`}
`;

const Navbar = () => (
	<Wrapper>
		<NavbarContainer>
			<Search />
			<Menu />
		</NavbarContainer>
	</Wrapper>
);

export default Navbar;
