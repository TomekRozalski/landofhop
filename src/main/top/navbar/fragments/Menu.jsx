import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { isDate } from 'lodash';

import { AuthenticationContext } from 'config';
import { colors, fonts } from 'utils/theme';

const List = styled.ul`
	margin: 5rem 1.5rem;
`;

const ListItem = styled.li`
	margin: 1rem;
`;

const StyledLink = styled(Link)`
	display: block;
	padding: 0 2rem;
	background-color: ${colors.gray[100]};
	font: 400 3rem / 5rem ${fonts.primary};
	text-decoration: none;
	text-transform: uppercase;
	color: ${colors.gray[700]};
	transition: background-color .2s, color .2s;

	&:hover {
		background-color: ${colors.gray[700]};
		color: ${colors.gray[100]};
	}
`;

const Menu = () => {
	const { token, tokenExpiration } = useContext(AuthenticationContext);

	return (
		<List>
			<ListItem>
				<StyledLink to="/contact">
					<FormattedMessage id="navbar.aboutName" />
				</StyledLink>
			</ListItem>
			<ListItem>
				<StyledLink to="/stats">Statystyki</StyledLink>
			</ListItem>
			<ListItem>
				<StyledLink to="/">Wyszukiwanie zaawansowane</StyledLink>
			</ListItem>
			{
				token && isDate(tokenExpiration) && (
					<ListItem>
						<StyledLink to="/add-new-beverage">
							<FormattedMessage id="navbar.addNewBeverage" />
						</StyledLink>
					</ListItem>
				)
			}
		</List>
	);
};

export default Menu;
