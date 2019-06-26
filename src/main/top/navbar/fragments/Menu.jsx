import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { colors, fonts } from 'utils/theme';

const List = styled.div`
	margin: 5rem 2.5rem;
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

const Menu = () => (
	<List>
		<ListItem>
			<StyledLink to="contact">
				<FormattedMessage id="navbar.aboutName" />
			</StyledLink>
		</ListItem>
		<ListItem>
			<StyledLink to="contact">Statystyki</StyledLink>
		</ListItem>
		<ListItem>
			<StyledLink to="contact">Wyszukiwanie zaawansowane</StyledLink>
		</ListItem>
	</List>
);

export default Menu;
