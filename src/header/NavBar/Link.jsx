import React, { useContext } from 'react';
import { bool, node, string } from 'prop-types';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

import { NavigationContext } from 'config';
import { colors } from 'utils/theme';

const StyledLink = styled(RouterLink)`
	display: flex;
	align-items: center;
	padding: 1rem;
	color: ${colors.gray[100]};
	background-color: ${colors.gray[700]};
	transition: color .2s, background-color .2s;

	${({ disabled }) => (disabled
		? (`
			text-decoration: line-through;
			cursor: default
		`)
		: (`
			text-decoration: none;

			&:hover {
				color: ${colors.gray[700]};
				background-color: ${colors.gray[100]};
			}
		`)
	)}
`;

const Link = ({ children, disabled, to }) => {
	const { setLoginbar, toggleNavbar } = useContext(NavigationContext);

	return (
		<StyledLink
			disabled={disabled}
			onClick={() => { toggleNavbar(); setLoginbar(false); }}
			to={to}
		>
			{children}
		</StyledLink>
	);
};

Link.propTypes = {
	children: node.isRequired,
	disabled: bool,
	to: string.isRequired,
};

Link.defaultProps = {
	disabled: false,
};

export default Link;
