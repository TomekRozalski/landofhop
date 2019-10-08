import styled from 'styled-components';

import {
	colors,
	indexes,
	mq,
	sizes,
	timingFunctions,
} from 'utils/theme';

const setTopGutter = (withLoginbar, withNavbar, breakpoint) => {
	if (withNavbar && !withLoginbar) {
		return sizes.navbar.height[breakpoint];
	}

	if (withNavbar && withLoginbar) {
		return sizes.navbar.height[breakpoint] + sizes.loginbar.height[breakpoint];
	}

	return 0;
};

export default styled.header`
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
