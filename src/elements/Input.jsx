import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { get } from 'lodash';

import { colors, fonts, gutters } from 'utils/theme';
import FieldStatusIndicator from './FieldStatusIndicator';

const Field = styled.input.attrs({
	type: 'text',
})`
	${({ inverse, withIcon }) => `
		display: block;
		width: 100%;
		height: ${gutters.inputHeight}rem;
		border: 0;
		border-bottom: 1px solid ${colors.gray[300]};
		padding: ${withIcon ? '0 25px 0 1rem' : '0 1rem'};
		background-color: ${inverse ? colors.gray[700] : colors.gray[500]};
		font: 300 1.6rem / 1 ${fonts.primary};
		color: ${colors.gray[100]};
	`}

	&:focus {
		outline: none;
		border-bottom-color: ${colors.gray[100]};
	}

	&:disabled {
		${({ inverse }) => `
			border-bottom: 1px solid ${colors.gray[400]};
			background-color: ${inverse ? colors.gray[500] : colors.gray[600]};
			color: ${colors.gray[200]};
			cursor: not-allowed;
		`}
	}
`;

const Input = ({ field, search, ...props }) => {
	const disabled = get(field, 'value') === null;
	const name = get(field, 'name');
	const error = get(props, `form.errors.${name}`);
	const touched = get(props, `form.touched.${name}`);
	const success = !error && touched && !disabled && field.value !== '';
	const warning = error && touched && !disabled;

	return (
		<FieldStatusIndicator
			search={search}
			success={success}
			warning={warning}
		>
			<Field
				disabled={disabled}
				withIcon={search || success || warning}
				{...field}
				value={field.value === null ? '' : field.value}
				{...props}
			/>
		</FieldStatusIndicator>
	);
};

Input.propTypes = {
	error: PropTypes.string,
	field: PropTypes.shape({
		name: PropTypes.string,
		value: PropTypes.any,
	}),
	form: PropTypes.shape({
		touched: PropTypes.any,
	}),
	search: PropTypes.bool,
};

Input.defaultProps = {
	error: null,
	field: {
		name: '',
		value: '',
	},
	form: {
		touched: {},
	},
	search: false,
};

export default Input;
