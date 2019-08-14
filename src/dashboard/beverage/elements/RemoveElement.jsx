import React from 'react';
import styled from 'styled-components';

import { colors, gutters } from 'utils/theme';

const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: ${gutters.inputHeight}rem;
	height: ${gutters.inputHeight}rem;
	margin-right: ${gutters.default.lg}px;
	background-color: ${colors.danger.light};
	font-size: 2rem;
	color: ${colors.gray[700]};
	transition: background-color .2s;
	cursor: pointer;

	&:hover {
		background-color: ${colors.danger.strong};
	}
`;

const RemoveElement = props => (
	<StyledButton type="button" {...props}>-</StyledButton>
);

export default RemoveElement;
