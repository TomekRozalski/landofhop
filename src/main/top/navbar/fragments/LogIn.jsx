import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';

import { NavigationContext } from 'config';
import { Locked } from 'elements/icons';
import { StyledLink } from './index';

const LogIn = () => {
	const { toggleLoginbar } = useContext(NavigationContext);

	return (
		<StyledLink role="button" onClick={toggleLoginbar}>
			<Locked />
			<FormattedMessage id="navbar.login" />
		</StyledLink>
	);
};

export default LogIn;
