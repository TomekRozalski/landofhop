import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors, gutters } from 'utils/theme';

const StyledLabel = styled.label`
	display: flex;
	align-items: center;
	height: ${gutters.inputHeight}rem;
	${({ withPadding }) => (withPadding && `padding-right: ${gutters.inputHeight + 1}rem;`)}
	cursor: pointer;

	&::after {
		content: ':';
	}
`;

const Required = styled.em`
	margin-left: .2rem;
	font-weight: 700;
	font-style: normal;
	color: ${colors.danger.strong};
`;

const Label = ({ children, required, ...props }) => (
	<StyledLabel {...props}>
		{ children }
		{ required && <Required>*</Required> }
	</StyledLabel>
);

Label.propTypes = {
	children: PropTypes.node.isRequired,
	required: PropTypes.bool,
};

Label.defaultProps = {
	required: false,
};

export default Label;
