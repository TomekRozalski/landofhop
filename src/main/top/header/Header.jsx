import React, { useCallback, useContext } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import { NavigationContext } from 'config';
import { grid } from 'utils';
import { colors, gutters, indexes } from 'utils/theme';
import { LanguageMenu, Logo, NavigationSwitcher } from './fragments';

const Wrapper = styled(animated.header)`
	display: block;
	width: 100%;
	background-color: ${colors.gray[100]};
	position: fixed;
	left: 0;
	z-index: ${indexes.header};
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

	const calcTop = useCallback(() => {
		const { loginbarHeight, navbarHeight } = gutters;

		if (navbar) {
			return loginbar
				? `${navbarHeight.sm + loginbarHeight.sm}px`
				: `${navbarHeight.sm}px`;
		}

		return '0';
	});

	const props = useSpring({
		from: { top: '0px' },
		top: calcTop(),
	});

	return (
		<Wrapper style={props}>
			<HeaderContainer>
				<Logo />
				<LanguageMenu />
				<NavigationSwitcher />
			</HeaderContainer>
		</Wrapper>
	);
};

export default Header;
