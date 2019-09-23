import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { timingFunctions } from 'utils/theme';

const StyledLink = styled(Link)`
	grid-area: logo;
	display: flex;
	justify-content: center;

	&:hover > h1 {
		width: 7rem;
	}
`;

const Title = styled.h1`
	width: 5rem;
	transition: width ${timingFunctions.spring};
	height: 100%;
	overflow: hidden;
	position: relative;

	&::before {
		content: '';
		background: white;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}
`;

const Logo = () => (
	<StyledLink to="/">
		<Title>Land of Hop</Title>
	</StyledLink>
);

export default Logo;
