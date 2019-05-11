import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { get } from 'lodash';

import { colors, fonts, gutters } from 'utils/theme';
import FieldStatusIndicator from './FieldStatusIndicator';

const Field = styled.textarea`
	${({ inverse, withIcon }) => `
		display: block;
		width: 100%;
		height: ${gutters.inputHeight * 12}rem;
		border: 0;
		border-bottom: 1px solid ${colors.gray[300]};
		padding: ${withIcon ? '.5rem 25px .5rem 1rem' : '.5rem 1rem'};
		background-color: ${inverse ? colors.gray[700] : colors.gray[500]};
		font: 300 1.6rem / 2.4rem ${fonts.primary};
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

const Textarea = ({ field, search, ...props }) => {
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
				value={field.value || ''}
				{...props}
			/>
		</FieldStatusIndicator>
	);
};

Textarea.propTypes = {
	field: PropTypes.shape({}),
	search: PropTypes.bool,
};

Textarea.defaultProps = {
	field: {},
	search: false,
};

export default Textarea;
