import styled from 'styled-components';

import {
	colors,
	indexes,
	mq,
	sizes,
	timingFunctions,
} from 'utils/theme';

const setTranslate = (isActive, isNavbar, breakpoint) => {
	if (!isNavbar) {
		return sizes.topbar.height[breakpoint] - sizes.loginbar.height[breakpoint];
	}

	return isActive
		? sizes.navbar.height[breakpoint]
		: sizes.navbar.height[breakpoint] - sizes.loginbar.height[breakpoint];
};

export default styled.div`
	display: flex;
	width: 100%;
	height: ${sizes.loginbar.height.xs}px;
	background-color: ${({ loginState }) => {
		if (loginState === false) {
			return colors.danger.light;
		}

		if (loginState === true) {
			return colors.success.light;
		}

		return colors.gray[500];
	}};
	position: fixed;
	top: 0;
	transform: translateY(${({ isActive, isNavbar }) => setTranslate(isActive, isNavbar, 'xs')}px);
	transition: transform ${timingFunctions.default};

	left: 0;
	z-index: ${indexes.loginbar};

	${mq.xl`
		height: ${sizes.loginbar.height.xl}px;
		transform: translateY(${({ isActive, isNavbar }) => setTranslate(isActive, isNavbar, 'xl')}px);
	`}
`;
