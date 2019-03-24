import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import { NavigationContext } from 'config';
import { Unlocked } from 'elements/icons';
import { ListItem, StyledLink } from './index';

const LogOut = () => {
	const { logOut } = useContext(NavigationContext);

	return (
		<>
			<ListItem>
				<StyledLink role="button" onClick={logOut}>
					<Unlocked />
					<FormattedMessage id="navbar.logout" />
				</StyledLink>
			</ListItem>
			<ListItem>
				<StyledLink as={Link} to="add-new-beverage">
					<FormattedMessage id="navbar.addNewBeverage" />
				</StyledLink>
			</ListItem>
		</>
	);
};

export default LogOut;
