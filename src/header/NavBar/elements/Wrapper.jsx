import styled from 'styled-components';

import {
	colors,
	indexes,
	mq,
	sizes,
	timingFunctions,
} from 'utils/theme';

export default styled.nav`
	display: block;
	width: 100%;
	height: ${sizes.navbar.height.xs}px;
	background: ${colors.gray[700]};
	position: fixed;
	top: 0;
	transform: translateY(${({ isNavbar }) => (isNavbar ? 0 : `-${sizes.topbar.height.xs}px`)});
	transition: transform ${timingFunctions.default};
	left: 0;
	z-index: ${indexes.navbar};

	${mq.md`
		transform: translateY(${({ isNavbar }) => (isNavbar ? 0 : `-${sizes.topbar.height.md}px`)});
	`}

	${mq.xl`
		height: ${sizes.navbar.height.xl}px;
		transform: translateY(${({ isNavbar }) => (isNavbar ? 0 : `-${sizes.topbar.height.xl}px`)});
	`}
`;
