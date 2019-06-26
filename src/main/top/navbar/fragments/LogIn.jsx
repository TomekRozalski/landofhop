import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';

import { NavigationContext } from 'config';
import { Locked } from 'elements/icons';


const LogIn = () => {
	const { toggleLoginbar } = useContext(NavigationContext);

	return (
		<button type="button" onClick={toggleLoginbar}>
			<Locked />
			<FormattedMessage id="navbar.login" />
		</button>
	);
};

export default LogIn;
