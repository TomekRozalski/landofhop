import React from 'react';
import styled from 'styled-components';

import {
	colors,
	grids,
	indexes,
	sizes,
} from 'utils/theme';
import { Logo, NavigationSwitcher, SearchbarSwitcher } from './index';

const Wrapper = styled.header`
	display: block;
	width: 100%;
	height: ${sizes.header.height}px;
	overflow: hidden;
	background-color: ${colors.gray[100]};
	position: fixed;
	top: 0;
	left: 0;
	z-index: ${indexes.header};
`;

const HeaderContainer = styled.div`
	${grids.headerGrid}
	grid-template-rows: ${sizes.header.height}px;
`;

const Header = () => (
	<Wrapper>
		<HeaderContainer>
			<Logo />
			<SearchbarSwitcher />
			<NavigationSwitcher />
		</HeaderContainer>
	</Wrapper>
);

export default Header;
