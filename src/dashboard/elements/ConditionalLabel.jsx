/* eslint react/forbid-prop-types: 0 */
import React from 'react';
import {
	any,
	bool,
	func,
	node,
	shape,
	string,
} from 'prop-types';
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
	children,
	field: {
		name,
		value,
	},
	form: {
		setFieldValue,
		setTouched,
	},
	formName,
	inverse,
	reset,
	...rest
}) => {
	const checked = value !== null;

	const setValue = ({ target: { checked: isChecked } }) => {
		if (isChecked) {
			setFieldValue(name, reset);
		} else {
			setFieldValue(name, null);
			setTouched(name, false);
		}
	};

	return (
		<Wrapper checked={checked} inverse={inverse}>
			<Checkbox
				id={`${formName}-is${name}`}
				onChange={setValue}
				checked={checked}
			/>
			<Label htmlFor={`${formName}-is${name}`} withPadding {...rest}>{ children }</Label>
			{ checked && <Checkmark /> }
		</Wrapper>
	);
};

ConditionalLabel.propTypes = {
	children: node.isRequired,
	field: shape({
		name: string.isRequired,
		value: any,
	}).isRequired,
	form: shape({
		setFieldValue: func.isRequired,
		setTouched: func.isRequired,
	}).isRequired,
	formName: string.isRequired,
	inverse: bool,
	reset: any.isRequired,
};

ConditionalLabel.defaultProps = {
	inverse: false,
};

export default ConditionalLabel;
