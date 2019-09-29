import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { NavigationContext } from 'config';
import { timingFunctions } from 'utils/theme';

const StyledLink = styled(Link)`
	grid-area: logo;
	display: flex;
	justify-content: center;

	&:hover > h1 {
		transform: scaleX(1.2);
	}
`;

const Title = styled.h1`
	width: 5rem;
	height: 100%;
	overflow: hidden;
	position: relative;
	transform: scaleX(1);
	transition: transform ${timingFunctions.default};

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

const Logo = () => {
	const { setLoginbar, setNavbar } = useContext(NavigationContext);

	return (
		<StyledLink onClick={() => { setNavbar(false); setLoginbar(false); }} to="/">
			<Title>Land of Hop</Title>
		</StyledLink>
	);
};

export default Logo;
