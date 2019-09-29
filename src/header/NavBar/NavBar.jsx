import React from 'react';
import styled from 'styled-components';

import { colors, indexes, sizes } from 'utils/theme';
import { Authorization, LangNavigation, ListOfLinks } from './index';

const Wrapper = styled.nav`
	display: block;
	width: 100%;
	height: ${sizes.navbar.height}px;
	position: fixed;
	top: 0;
	left: 0;
	z-index: ${indexes.navbar};
`;

const NavBarContainer = styled.div`
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;
	align-items: stretch;
	width: ${sizes.container.width}px;
	height: ${sizes.navbar.height - sizes.container.border.width}px;
	margin: ${sizes.container.border.width}px auto 0 auto;
	padding: 0 ${sizes.container.border.width}px;
	background: ${colors.gray[700]};
`;

const MainNavigation = styled.div`
	display: flex;
`;

const NavBar = () => (
	<Wrapper>
		<NavBarContainer>
			<MainNavigation>
				<Authorization />
				<ListOfLinks />
			</MainNavigation>
			<LangNavigation />
		</NavBarContainer>
	</Wrapper>
);

export default NavBar;
