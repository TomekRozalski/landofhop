import React from 'react';
import styled, { keyframes } from 'styled-components';

import { colors, gutters } from 'utils/theme';

const Wrapper = styled.div`
	display: inline-block;
	width: ${gutters.inputHeight - 1}rem;
	height: ${gutters.inputHeight - 1}rem;
	position: absolute;
	top: 50%;
	right: 1rem;
	transform: translateY(-50%);
`;

const animation = keyframes`
	0% { transform: rotate(0deg); }
	100% { transform: rotate(360deg); }
`;

const Part = styled.div`
	box-sizing: border-box;
	display: block;
	position: absolute;
	margin: 0.4rem;
	width: ${gutters.inputHeight - 1.6}rem;
	height: ${gutters.inputHeight - 1.6}rem;
	border: 0.3rem solid ${colors.gray[700]};
	border-color: ${colors.gray[700]} transparent transparent transparent;
	border-radius: 50%;
	animation: ${animation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;

	${({ delay }) => {
		if (delay) {
			return `animation-delay: -${delay}s;`;
		}

		return null;
	}}
`;

const ButtonSpinner = () => (
	<Wrapper>
		<Part delay=".45" />
		<Part delay=".3" />
		<Part delay=".15" />
		<Part />
	</Wrapper>
);

export default ButtonSpinner;
