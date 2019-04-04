import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Label } from 'elements';
import { Checkmark } from 'elements/icons';
import { colors, gutters } from 'utils/theme';

const Wrapper = styled.div`
	position: relative;

	&::before {
		${({ checked, inverse }) => {
		let background;

		if (!inverse && !checked) {
			background = colors.gray['600'];
		} else if (!inverse && checked) {
			background = colors.gray['500'];
		} else if (inverse && !checked) {
			background = colors.gray['500'];
		} else if (inverse && checked) {
			background = colors.gray['700'];
		}

		return (`
			display: block;
			width: ${gutters.inputHeight}rem;
			height: ${gutters.inputHeight}rem;
			border-bottom: 1px solid ${checked ? colors.gray[300] : colors.gray[400]};
			background-color: ${background};
			content: '';
			position: absolute;
			top: 0;
			right: 0;
			pointer-events: none;
		`);
	}}
	}

	svg {
		width: ${gutters.inputHeight * 0.6}rem;
		position: absolute;
		top: 50%;
		right: ${gutters.inputHeight * 0.2}rem;
		transform: translateY(-50%);
		pointer-events: none;
	}
`;

const Checkbox = styled.input.attrs({
	type: 'checkbox',
})`
	display: none;
`;

const ConditionalLabel = ({
	checked,
	children,
	conditional,
	formName,
	inverse,
	onChange,
	required,
	...props
}) => (
	<Wrapper checked={checked} inverse={inverse}>
		<Checkbox
			id={`${formName}-${conditional}`}
			name={conditional}
			onChange={onChange}
			checked={checked}
		/>
		<Label htmlFor={`${formName}-${conditional}`} withPadding {...props}>{ children }</Label>
		{ checked && <Checkmark /> }
	</Wrapper>
);

ConditionalLabel.propTypes = {
	checked: PropTypes.bool.isRequired,
	children: PropTypes.node.isRequired,
	conditional: PropTypes.string.isRequired,
	formName: PropTypes.string.isRequired,
	inverse: PropTypes.bool,
	onChange: PropTypes.func.isRequired,
	required: PropTypes.bool,
};

ConditionalLabel.defaultProps = {
	inverse: false,
	required: false,
};

export default ConditionalLabel;
