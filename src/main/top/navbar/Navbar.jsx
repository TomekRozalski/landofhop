import React from 'react';
import styled from 'styled-components';

import { colors, indexes } from 'utils/theme';
import { LanguageMenu, Menu } from './fragments';

const Wrapper = styled.nav`
	display: block;
	width: 50%;
	height: 100vh;
	padding-top: 20rem;
	position: fixed;
	top: 0;
	right: 0;
	background: ${colors.gray[100]};
	z-index: ${indexes.navbar};
`;

const Navbar = () => (
	<Wrapper>
		<LanguageMenu />
		<Menu />
		{/* <Login /> */}
	</Wrapper>
);

export default Navbar;
