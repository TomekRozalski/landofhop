import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { mq } from 'utils/theme';
import { Logomark } from 'elements/icons';

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
	width: 70px;
	height: 70px;
	border-radius: 50%;
	overflow: hidden;
	line-height: 0;
	transform: rotate(0);
	transition: transform .2s;

	&:hover { transform: rotate(15deg); }

	${mq.md`
		width: 100px;
		height: 100px;
	`}
`;

const Title = styled.h1`
	padding: 1px;

	svg {
		display: block;
		width: 100%;
		height: 100%;
	}
`;

const Logo = () => (
	<LogoWrapper data-testid="logo">
		<StyledLink to="/">
			<Title>
				<Logomark />
			</Title>
		</StyledLink>
	</LogoWrapper>
);

export default Logo;
