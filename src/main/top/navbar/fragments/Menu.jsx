import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { isDate } from 'lodash';

import { NavigationContext } from 'config';

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
	const { token, tokenExpiration } = useContext(NavigationContext);

	return (
		<MenuWrapper>
			<List>
				<ListItem>
					<StyledLink as={Link} to="contact">
						<FormattedMessage id="navbar.aboutName" />
					</StyledLink>
				</ListItem>
				{ token && isDate(tokenExpiration) ? <LogOut /> : <LogIn /> }
				<ExpirationDate />
			</List>
		</MenuWrapper>
	);
};

export default Menu;
