import React from 'react';
import styled from 'styled-components';

import { colors, indexes, sizes } from 'utils/theme';
import { Authorization, ListOfLinks } from './index';

const Wrapper = styled.nav`
	display: block;
	width: 100%;
	height: ${sizes.navbar.height}px;
	position: fixed;
	top: 0;
	left: 0;
	z-index: ${indexes.navbar};
`;

const HeaderContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: stretch;
	width: ${sizes.container.width}px;
	height: ${sizes.navbar.height - sizes.container.border.width}px;
	margin: ${sizes.container.border.width}px auto 0 auto;
	background: ${colors.gray[700]};
`;

const NavBar = () => (
	<Wrapper>
		<HeaderContainer>
			<Authorization />
			<ListOfLinks />
		</HeaderContainer>
	</Wrapper>
);

export default NavBar;
