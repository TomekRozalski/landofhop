import React, { useContext } from 'react';
import { bool, node, string } from 'prop-types';

import { NavigationContext } from 'config';
import { StyledLink } from './elements';

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
