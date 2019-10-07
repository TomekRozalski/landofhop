import React, { useContext } from 'react';
import styled from 'styled-components';

import { NavigationContext } from 'config';
import {
	colors,
	grids,
	indexes,
	mq,
	sizes,
	timingFunctions,
} from 'utils/theme';
import { Logo, NavigationSwitcher, SearchbarSwitcher } from './index';

const setTopGutter = (withLoginbar, withNavbar, breakpoint) => {
	if (withNavbar && !withLoginbar) {
		return sizes.navbar.height[breakpoint];
	}

	if (withNavbar && withLoginbar) {
		return sizes.navbar.height[breakpoint] + sizes.loginbar.height[breakpoint];
	}

	return 0;
};

const Wrapper = styled.header`
	display: block;
	width: 100%;
	height: ${sizes.topbar.height.xs}px;
	overflow: hidden;
	background-color: ${colors.gray[100]};
	position: fixed;
	top: 0;
	left: 0;
	z-index: ${indexes.header};
	transform: translateY(${({ withLoginbar, withNavbar }) => setTopGutter(withLoginbar, withNavbar, 'xs')}px);
	transition: transform ${timingFunctions.default};

	${mq.md`
		height: ${sizes.topbar.height.md}px;
		transform: translateY(${({ withLoginbar, withNavbar }) => setTopGutter(withLoginbar, withNavbar, 'md')}px);
	`}

	${mq.xl`
		height: ${sizes.topbar.height.xl}px;
		transform: translateY(${({ withLoginbar, withNavbar }) => setTopGutter(withLoginbar, withNavbar, 'xl')}px);
	`}
`;

const HeaderContainer = styled.div`
	${grids.headerGrid}
	grid-template-rows: ${sizes.topbar.height.xs}px;

	${mq.md`
		grid-template-rows: ${sizes.topbar.height.md}px;
	`}

	${mq.xl`
		grid-template-rows: ${sizes.topbar.height.xl}px;
	`}
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
