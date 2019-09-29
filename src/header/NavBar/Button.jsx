import React from 'react';
import { bool, func, node } from 'prop-types';
import styled from 'styled-components';

import { Locked, Unlocked } from 'elements/icons';
import { colors } from 'utils/theme';

const StyledButton = styled.button`
	display: flex;
	align-items: center;
	padding: 1rem;
	text-decoration: none;
	color: ${colors.gray[100]};
	background-color: ${colors.gray[700]};
	transition: color .2s, background-color .2s;
	cursor: pointer;
	${({ uppercase }) => (uppercase && 'text-transform: uppercase;')}

	&:hover {
		color: ${colors.gray[700]};
		background-color: ${colors.gray[100]};

		svg path {
			fill: ${colors.gray[700]};
		}
	}

	&:focus {
		outline: none;
	}

	${({ withIcon }) => (withIcon && `
		padding-left: 3rem;
		position: relative;
	
		svg {
			width: 1.2rem;
			position: absolute;
			top: 50%;
			left: 1rem;
			transform: translateY(-50%);

			path {
				fill: ${colors.gray[100]};
				transition: fill .2s;
			}
		}
	`)}
`;

const Button = ({
	children,
	logIn,
	logOut,
	onClick,
	uppercase,
}) => (
	<StyledButton
		onClick={onClick}
		uppercase={uppercase}
		withIcon={logIn || logOut}
	>
		{logIn && <Unlocked />}
		{logOut && <Locked />}
		{children}
	</StyledButton>
);

Button.propTypes = {
	children: node.isRequired,
	logIn: bool,
	logOut: bool,
	onClick: func.isRequired,
	uppercase: bool,
};

Button.defaultProps = {
	logIn: false,
	logOut: false,
	uppercase: false,
};

export default Button;
