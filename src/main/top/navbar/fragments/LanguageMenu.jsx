import React from 'react';
import styled from 'styled-components';

import { colors, fonts } from 'utils/theme';

const List = styled.div`
	display: flex;
	margin: 5rem 3.5rem;
`;

const ListItem = styled.li`
	display: flex;
	margin: 1rem;
	font: 400 3rem / 5rem ${fonts.primary};
	text-decoration: none;
	text-transform: uppercase;
	color: ${colors.gray[700]};

	& + &::before {
		margin-right: 2rem;
		content: '/';
		
	}
`;

const StyledLink = styled.button`
	display: block;
	background-color: ${colors.gray[100]};
	transition: background-color .2s, color .2s;
	color: ${colors.gray[700]};
	cursor: pointer;

	&:hover {
		background-color: ${colors.gray[700]};
		color: ${colors.gray[100]};
	}
`;

const LanguageMenu = () => {
	console.log('LanguageMenu');

	return (
		<List>
			<ListItem>
				<StyledLink>PL</StyledLink>
			</ListItem>
			<ListItem>
				<StyledLink>EN</StyledLink>
			</ListItem>
		</List>

	);
};

export default LanguageMenu;
