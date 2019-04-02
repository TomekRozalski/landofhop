import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { colors, gutters } from 'utils/theme';

const move = () => keyframes`
	0% { background-position: 0 0; }
	100% { background-position:
		${gutters.inputHeight}rem
		${gutters.inputHeight}rem;
	}
`;

const Wrapper = styled.div`
	display: block;
	width: 100%;
	height: 100%;
	position: relative;

	&::after {
		content: '';
		background-image: linear-gradient(
			-45deg, 
			${colors.gray[600]} 25%, 
			${colors.gray[700]} 25%,
			${colors.gray[700]} 50%,
			${colors.gray[600]} 50%,
			${colors.gray[600]} 75%,
			${colors.gray[700]} 75%,
			${colors.gray[700]}
		);
		background-size: ${gutters.inputHeight}rem ${gutters.inputHeight}rem;
		animation: ${move} 2s linear infinite;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
	}
`;

const LoadingGroup = () => (
	<Wrapper><FormattedMessage id="dashboard.loading" /></Wrapper>
);

export default LoadingGroup;
