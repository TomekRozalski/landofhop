import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import { AuthenticationContext } from 'config';
import { Unlocked } from 'elements/icons';
import { StyledLink } from './index';

const LogOut = () => {
	const { logOut } = useContext(AuthenticationContext);

	return (
		<>
			<StyledLink role="button" onClick={logOut}>
				<Unlocked />
				<FormattedMessage id="navbar.logout" />
			</StyledLink>
			<StyledLink as={Link} to="/add-new-beverage">
				<FormattedMessage id="navbar.addNewBeverage" />
			</StyledLink>
		</>
	);
};

export default LogOut;
