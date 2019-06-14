import React, { useState } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
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
	display: block;
	height: 100%;
`;

const Title = styled(animated.h1)`
	display: block;
	width: 5rem;
	height: 100%;
	overflow: hidden;

	&::before {
		display: block;
		width: 100%;
		height: 100%;
		content: '';
		background: white;
	}
`;

const Logo = () => {
	const [isHover, setHover] = useState(false);
	const enlarge = useSpring({
		width: isHover ? '7rem' : '5rem',
	});

	return (
		<LogoWrapper>
			<StyledLink to="/">
				<Title style={enlarge} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>Land of Hop</Title>
			</StyledLink>
		</LogoWrapper>
	);
};

export default Logo;
