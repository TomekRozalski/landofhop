import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { LanguageContext } from 'config';
import { colors, fonts, indexes } from 'utils/theme';

const LangItem = styled.li`
	margin-right: 10px;
`;

const LangButton = styled.button.attrs({
	type: 'button',
})`
	display: inline-block;
	padding: 2px 0 5px 0;
	background-color: transparent;
	font: 400 1.5rem / 2rem ${fonts.primary};
	color: ${colors.gray[500]};
	transition: color .2s;
	position: relative;
	z-index: ${indexes.langLink};
	cursor: pointer;

	&::before {
		display: inline-block;
		width: calc(100% + 10px);
		height: 100%;
		content: '';
		background-color: ${colors.gray[100]};
		transition: background-color .2s;
		position: absolute;
		top: 0;
		left: -5px;
		z-index: -1;
	}

	&::after {
		display: ${({ active }) => (active ? 'inline-block' : 'none')};
		width: 100%;
		height: 1px;
		content: '';
		background-color: ${colors.gray[500]};
		transition: background-color .2s;
		position: absolute;
		left: 0;
		bottom: 0;
	}

	&:hover,
	&:focus {
		outline: none;
		color: ${colors.gray[100]};

		&::before,
		&::after {
			background-color: ${colors.gray[700]};
		}
	}
`;

const LanguageLink = ({ languageName }) => {
	const { changeLanguage, language } = useContext(LanguageContext);

	return (
		<LangItem>
			<LangButton
				onClick={() => changeLanguage(languageName)}
				active={languageName === language}
				data-testid={`language-link-${languageName}`}
			>
				{ languageName }
			</LangButton>
		</LangItem>
	);
};

LanguageLink.propTypes = {
	languageName: PropTypes.string.isRequired,
};

export default LanguageLink;
