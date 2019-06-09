import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { mq } from 'utils/theme';

const LogoWrapper = styled.div`
	order: 2;
	display: flex;
	justify-content: center;
	align-items: center;

	${mq.md`
		grid-column: 2 / 5;
		grid-row: 1;
	`}
`;

const StyledLink = styled(Link)`
	display: inline-block;
	width: 3rem;
	height: 100%;
	overflow: hidden;
	line-height: 0;
	transform: rotate(0);
	transition: transform .2s;
`;

const Title = styled.h1`
	display: block;
	width: 10rem;
	height: 100%;
	background: white;
`;

const Logo = () => (
	<LogoWrapper>
		<StyledLink to="/">
			<Title>Land of Hop</Title>
		</StyledLink>
	</LogoWrapper>
);

export default Logo;
