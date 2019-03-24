import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors, gutters } from 'utils/theme';
import ButtonSpinner from './ButtonSpinner';

const Wrapper = styled.button.attrs({
	type: 'button',
})`
	${({
		disabled,
		isSubmitting,
		resign,
		secondary,
		submit,
		wide,
	}) => {
		const { danger, gray, success } = colors;

		return (`
			width: ${wide ? '100%' : 'auto'};
			height: 3.4rem;
			padding: 0 2rem;
			background-color: ${gray[100]};
			color: ${gray[700]};
			transition: all .2s;
			cursor: pointer;

			${isSubmitting ? (`
				padding-right: ${gutters.inputHeight + 1}rem;
				background-color: ${gray[300]};
				cursor: not-allowed;
				position: relative;

				&:focus {
					outline: none;
				}
			`) : ''}

			${resign ? `background-color: ${danger.light};` : ''}

			${secondary ? (`
				background-color: ${gray[500]};
				color: ${gray[300]};
			`) : ''}

			${disabled ? (`
				background-color: ${gray[300]};
				color: ${gray[500]};
				cursor: not-allowed;
			`) : ''}

			${!disabled ? (`
				&:hover {
					background-color: ${gray[300]};
					color: ${gray[100]};
					
					${resign ? (`
						background-color: ${danger.strong};
						color: ${gray[700]};
					`) : ''}

					${secondary ? (`
						background-color: ${gray[100]};
						color: ${gray[400]};
					`) : ''}

					${submit ? (`
						background-color: ${success.strong};
						color: ${gray[700]};
					`) : ''}

					${isSubmitting ? (`
						background-color: ${gray[300]};
						color: ${gray[700]};
					`) : ''}
				}
			`) : ''}
		`);
	}}
`;

const Button = ({ children, isSubmitting, ...props }) => (
	<Wrapper isSubmitting={isSubmitting} {...props}>
		{ children }
		{ isSubmitting && <ButtonSpinner /> }
	</Wrapper>
);

Button.propTypes = {
	children: PropTypes.node.isRequired,
	isSubmitting: PropTypes.bool,
};

Button.defaultProps = {
	isSubmitting: false,
};

export default Button;
