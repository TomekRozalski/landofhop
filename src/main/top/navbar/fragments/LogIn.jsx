import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';

import { NavigationContext } from 'config';
import { Locked } from 'elements/icons';
import { ListItem, StyledLink } from './index';

const LogIn = () => {
	const { toggleLoginbar } = useContext(NavigationContext);

	return (
		<ListItem>
			<StyledLink role="button" onClick={toggleLoginbar}>
				<Locked />
				<FormattedMessage id="navbar.login" />
			</StyledLink>
		</ListItem>
	);
};

export default LogIn;
