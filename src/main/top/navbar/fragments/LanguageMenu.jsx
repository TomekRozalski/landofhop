import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { LanguageContext } from 'config';
import { constants } from 'utils';
import { colors, fonts } from 'utils/theme';

const List = styled.ul`
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
		margin: 0.25rem 2rem 0 0;
		content: '/';
	}
`;

const StyledButton = styled.div.attrs({
	role: 'button',
})`
	display: block;
	border: .3rem solid ${colors.gray[100]};
	padding: 0 1rem .25rem 1rem;
	background-color: ${colors.gray[100]};
	transition: all .2s;
	text-transform: uppercase;
	color: ${colors.gray[700]};
	cursor: pointer;

	${({ active }) => (active && `border-color: ${colors.gray[700]};`)}

	&:hover {
		border-color: ${colors.gray[700]};
		background-color: ${colors.gray[700]};
		color: ${colors.gray[100]};
	}
`;

const LanguageItem = ({ item }) => {
	const { changeLanguage, language } = useContext(LanguageContext);

	return (
		<ListItem>
			<StyledButton
				active={item === language}
				onClick={() => changeLanguage(item)}
			>
				{ item }
			</StyledButton>
		</ListItem>
	);
};

LanguageItem.propTypes = {
	item: PropTypes.string.isRequired,
};

const LanguageMenu = () => {
	const siteLanguages = Object.keys(constants.siteLanguages);

	return (
		<List>{ siteLanguages.map(item => <LanguageItem key={item} item={item} />) }</List>
	);
};

export default LanguageMenu;
