import React, { useContext } from 'react';
import styled from 'styled-components';

import { NavigationContext } from 'config';
import {
	colors,
	grids,
	indexes,
	sizes,
	timingFunctions,
} from 'utils/theme';
import { Logo, NavigationSwitcher, SearchbarSwitcher } from './index';

const Wrapper = styled.header`
	display: block;
	width: 100%;
	height: ${sizes.topbar.height}px;
	overflow: hidden;
	background-color: ${colors.gray[100]};
	position: fixed;
	top: ${({ withNavbar }) => (withNavbar ? sizes.navbar.height : 0)}px;
	transition: top ${timingFunctions.spring};
	left: 0;
	z-index: ${indexes.header};
`;

const HeaderContainer = styled.div`
	${grids.headerGrid}
	grid-template-rows: ${sizes.topbar.height}px;
`;

const Header = () => {
	const { navbar } = useContext(NavigationContext);

	return (
		<Wrapper withNavbar={navbar}>
			<HeaderContainer>
				<Logo />
				<SearchbarSwitcher />
				<NavigationSwitcher />
			</HeaderContainer>
		</Wrapper>
	);
};

export default Header;
