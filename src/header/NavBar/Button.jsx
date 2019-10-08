import React from 'react';
import { bool, func, node } from 'prop-types';

import { Locked, Unlocked } from 'elements/icons';
import { StyledButton } from './elements';

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
