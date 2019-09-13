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
import { Logo, NavigationSwitcher, SearchbarSwitcher } from './fragments';

const Wrapper = styled.header`
	display: block;
	width: 100%;
	overflow: hidden;
	background-color: ${colors.gray[100]};
	position: fixed;
	top: 0;
	left: 0;
	z-index: ${indexes.header};
`;

const HeaderContainer = styled(animated.div)`
	${grids.headerGrid}
	grid-template-rows: ${sizes.header.height.tall.lg};
`;

const Header = () => {
	const { isHeaderTall, setHeaderHeight } = useContext(HeaderContext);

	const move = useSpring({
		gridTemplateRows: isHeaderTall
			? sizes.header.height.tall.lg
			: sizes.header.height.short.lg,
	});

	return (
		<Wrapper onMouseOver={() => setHeaderHeight(true)} onFocus={() => setHeaderHeight(true)}>
			<HeaderContainer style={move}>
				<Logo />
				<SearchbarSwitcher />
				<NavigationSwitcher />
			</HeaderContainer>
		</Wrapper>
	);
};

export default Header;
