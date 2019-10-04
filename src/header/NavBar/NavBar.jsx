import React, { useContext } from 'react';
import styled from 'styled-components';

import { NavigationContext } from 'config';
import {
	colors,
	indexes,
	mq,
	sizes,
	timingFunctions,
} from 'utils/theme';
import { Authorization, LangNavigation, ListOfLinks } from './index';

const Wrapper = styled.nav`
	display: block;
	width: 100%;
	height: ${sizes.navbar.height.xs}px;
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

const NavBarContainer = styled.div`
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;
	align-items: stretch;
	width: 100%;
	height: ${sizes.navbar.height.xs - sizes.container.border.width.xs}px;
	margin: ${sizes.container.border.width.xs}px auto 0 auto;
	padding: 0 3rem;
	background: ${colors.gray[700]};

	${mq.md`
		height: ${sizes.navbar.height.xs - sizes.container.border.width.md}px;
		margin: ${sizes.container.border.width.md}px auto 0 auto;
		padding: 0 6rem;
	`};

	${mq.xl`
		width: ${sizes.container.width.xl}px;
		height: ${sizes.navbar.height.xl - sizes.container.border.width.xl}px;
		margin: ${sizes.container.border.width.xl}px auto 0 auto;
		padding: 0 3rem;
	`};
`;

const MainNavigation = styled.div`
	display: flex;
`;

const NavBar = () => {
	const { navbar } = useContext(NavigationContext);

	return (
		<Wrapper isNavbar={navbar}>
			<NavBarContainer>
				<MainNavigation>
					<Authorization />
					<ListOfLinks />
				</MainNavigation>
				<LangNavigation />
			</NavBarContainer>
		</Wrapper>
	);
};

export default NavBar;
