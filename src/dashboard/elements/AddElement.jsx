import React from 'react';
import styled from 'styled-components';

import { colors, gutters } from 'utils/theme';

const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: ${gutters.inputHeight}rem;
	height: ${gutters.inputHeight}rem;
	background-color: ${colors.gray[500]};
	font-size: 2rem;
	color: ${colors.gray[300]};
	transition: all .2s;
	cursor: pointer;

	&:hover {
		background-color: ${colors.gray[100]};
		color: ${colors.gray[400]};
	}
`;

const AddElement = props => (
	<StyledButton type="button" {...props}>+</StyledButton>
);

export default AddElement;
