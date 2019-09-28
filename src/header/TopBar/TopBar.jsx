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
	top: 0;
	left: 0;
	z-index: ${indexes.header};
	transform: translateY(${({ withLoginbar, withNavbar }) => {
		if (withNavbar && !withLoginbar) {
			return sizes.navbar.height;
		}

		if (withNavbar && withLoginbar) {
			return sizes.navbar.height + sizes.loginbar.height;
		}

		return 0;
	}}px);
	transition: transform ${timingFunctions.default};
`;

const HeaderContainer = styled.div`
	${grids.headerGrid}
	grid-template-rows: ${sizes.topbar.height}px;
`;

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
