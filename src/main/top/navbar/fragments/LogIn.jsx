import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { colors, fonts } from 'utils/theme';
import { Locked } from '../icons';

const StyledButton = styled.div.attrs({
	role: 'button',
})`
	display: block;
	margin: 2rem 2.5rem;
	padding: 1rem 5rem;
	background-color: ${colors.gray[100]};
	font: 400 2rem / 1 ${fonts.primary};
	text-transform: uppercase;
	color: ${colors.gray[700]};
	transition: background-color .2s, color .2s;
	cursor: pointer;
	position: relative;

	svg {
		width: 1.5rem;
		fill: ${colors.gray[700]};
		transition: fill .2s;
		position: absolute;
		top: 50%;
		left: 2rem;
		transform: translateY(-50%);
	}

	&:hover {
		background-color: ${colors.gray[700]};
		color: ${colors.gray[100]};

		svg {
			fill: ${colors.gray[100]}
		}
	}
`;

const LogIn = () => (
	<StyledButton>
		<Locked />
		<FormattedMessage id="navbar.login" />
	</StyledButton>
);

export default LogIn;
