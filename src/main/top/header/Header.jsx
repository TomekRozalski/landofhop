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
import { Logo, NavigationSwitcher, Searchbar } from './fragments';

const Wrapper = styled.header`
	display: block;
	width: 100%;
	overflow: hidden;
	background-color: ${colors.gray[100]};
	position: fixed;
	left: 0;
	z-index: ${indexes.header};
`;

const HeaderContainer = styled(animated.div)`
	${grids.headerGrid}
	grid-template-rows: ${sizes.header.height.tall.lg};
`;

const Header = () => {
	const { isHeaderTall } = useContext(HeaderContext);

	const move = useSpring({
		'grid-template-rows': isHeaderTall
			? sizes.header.height.tall.lg
			: sizes.header.height.short.lg,
	});

	return (
		<Wrapper>
			<HeaderContainer style={move}>
				<Logo />
				<Searchbar />
				<NavigationSwitcher />
			</HeaderContainer>
		</Wrapper>
	);
};

export default Header;
