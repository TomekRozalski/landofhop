import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { AuthenticationContext } from 'config';

import {
	ExpirationDate,
	List,
	ListItem,
	LogIn,
	LogOut,
	MenuWrapper,
	StyledLink,
} from './index';

const Menu = () => {
	const { isLoggedIn } = useContext(AuthenticationContext);

	return (
		<MenuWrapper>
			<List>
				<ListItem>
					<StyledLink as={Link} to="contact">
						<FormattedMessage id="navbar.aboutName" />
					</StyledLink>
				</ListItem>
				<ListItem>
					<StyledLink as={Link} to="contact">Statystyki</StyledLink>
				</ListItem>
				<ListItem>
					<StyledLink as={Link} to="contact">Wyszukiwanie zaawansowane</StyledLink>
				</ListItem>
			</List>

			{ isLoggedIn ? <LogOut /> : <LogIn /> }
			<ExpirationDate />
		</MenuWrapper>
	);
};

export default Menu;
