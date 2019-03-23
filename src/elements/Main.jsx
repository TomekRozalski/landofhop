import styled from 'styled-components';

import { colors, gutters, indexes } from 'utils/theme';

const Main = styled.main`
	${({ isLoginbar, isNavbar }) => {
		const {
			headerHeight,
			loginbarHeight,
			navbarHeight,
		} = gutters;

		if (isNavbar && !isLoginbar) {
			return (`
				height: calc(100vh - ${headerHeight.lg + navbarHeight.lg}px);
				margin-top: ${headerHeight.lg + navbarHeight.lg}px;
			`);
		}

		if (isNavbar && isLoginbar) {
			return (`
				height: calc(100vh - ${headerHeight.lg + navbarHeight.lg + loginbarHeight.lg}px);
				margin-top: ${headerHeight.lg + navbarHeight.lg + loginbarHeight.lg}px;
			`);
		}

		return (`
			height: calc(100vh - ${headerHeight.lg}px);
			margin-top: ${headerHeight.lg}px;
		`);
	}}
	background-color: ${colors.gray[700]};
	transition: height .2s, margin-top .2s;
	position: relative;
	z-index: ${indexes.main};
`;

export default Main;
