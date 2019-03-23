import React, { useContext } from 'react';
import styled from 'styled-components';

import { NavigationContext } from 'config';
import { grid } from 'utils';
import {
	colors,
	gutters,
	indexes,
	mq,
} from 'utils/theme';
import { LanguageMenu, Logo, NavigationSwitcher } from './fragments';

const Wrapper = styled.header`
	display: block;
	width: 100%;
	background-color: ${colors.gray[100]};
	position: fixed;
	transition: top .2s;
	left: 0;
	z-index: ${indexes.header};
	top: 0;

	${({ isLoginbar, isNavbar }) => {
		const { loginbarHeight, navbarHeight } = gutters;

		if (isNavbar && !isLoginbar) {
			return `
				top: ${navbarHeight.sm}px;
			`;
		}

		if (isNavbar && isLoginbar) {
			return `
				top: ${navbarHeight.sm + loginbarHeight.sm}px;
			`;
		}

		return 'top: 0;';
	}}

	${({ isLoginbar, isNavbar }) => {
		const { loginbarHeight, navbarHeight } = gutters;

		if (isNavbar && !isLoginbar) {
			return mq.md`
				top: ${navbarHeight.md}px;
			`;
		}

		if (isNavbar && isLoginbar) {
			return mq.md`
				top: ${navbarHeight.md + loginbarHeight.md}px;
			`;
		}

		return 'top: 0;';
	}}

	${({ isLoginbar, isNavbar }) => {
		const { loginbarHeight, navbarHeight } = gutters;

		if (isNavbar && !isLoginbar) {
			return mq.lg`
				top: ${navbarHeight.lg}px;
			`;
		}

		if (isNavbar && isLoginbar) {
			return mq.lg`
				top: ${navbarHeight.lg + loginbarHeight.lg}px;
			`;
		}

		return 'top: 0;';
	}}
`;

const HeaderContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	height: ${gutters.headerHeight.lg}px;
	${grid}
`;

const Header = () => {
	const { loginbar, navbar } = useContext(NavigationContext);

	return (
		<Wrapper isNavbar={navbar} isLoginbar={loginbar}>
			<HeaderContainer>
				<Logo />
				<LanguageMenu />
				<NavigationSwitcher />
			</HeaderContainer>
		</Wrapper>
	);
};

export default Header;
