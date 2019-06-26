import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import { AuthenticationContext } from 'config';
import { Unlocked } from 'elements/icons';

const LogOut = () => {
	const { logOut } = useContext(AuthenticationContext);

	return (
		<>
			<button type="button" onClick={logOut}>
				<Unlocked />
				<FormattedMessage id="navbar.logout" />
			</button>
			<Link to="/add-new-beverage">
				<FormattedMessage id="navbar.addNewBeverage" />
			</Link>
		</>
	);
};

export default LogOut;
