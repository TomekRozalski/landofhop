import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';

import { AuthenticationContext, NavigationContext } from 'config';
import { ButtonsWrapper } from './elements';
import { Button } from './index';

const Authorization = () => {
	const { isLoggedIn, logOut } = useContext(AuthenticationContext);
	const { toggleLoginbar } = useContext(NavigationContext);

	return (
		<ButtonsWrapper>
			{ isLoggedIn
				? (
					<Button onClick={logOut} logIn>
						<FormattedMessage id="navbar.logout" />
					</Button>
				)
				: (
					<Button onClick={toggleLoginbar} logOut>
						<FormattedMessage id="navbar.login" />
					</Button>
				)}
		</ButtonsWrapper>
	);
};

export default Authorization;
