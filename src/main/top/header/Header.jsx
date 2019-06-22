import React, { useContext } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import { HeaderContext } from 'config';
import {
	colors,
	grids,
	indexes,
	sizes,
} from 'utils/theme';
import { LanguageMenu, Logo, NavigationSwitcher } from './fragments';

const Wrapper = styled(animated.header)`
	display: block;
	width: 100%;
	height: ${sizes.header.height.tall.lg};
	overflow: hidden;
	background-color: ${colors.gray[100]};
	position: fixed;
	left: 0;
	z-index: ${indexes.header};
`;

const HeaderContainer = styled.div`
	height: 100%;
	${grids.headerGrid}
`;

const Header = () => {
	const { isHeaderTall } = useContext(HeaderContext);

	const move = useSpring({
		height: isHeaderTall
			? sizes.header.height.tall.lg
			: sizes.header.height.short.lg,
	});

	return (
		<Wrapper style={move}>
			<HeaderContainer>
				<Logo />
				<LanguageMenu />
				<NavigationSwitcher />
			</HeaderContainer>
		</Wrapper>
	);
};

export default Header;
