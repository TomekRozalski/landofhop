import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { constants } from 'utils';
import { mq } from 'utils/theme';
import LanguageLink from './LanguageLink';

const LangWrapper = styled.div`
	order: 1;
	display: flex;
	align-items: center;

	${mq.md`
		grid-column: 1 / 2;
		grid-row: 1;
	`}
`;

const LangTitle = styled.h2`
	display: none;
`;

const LangList = styled.ul`
	display: flex;
`;

const LanguageMenu = () => (
	<LangWrapper>
		<LangTitle><FormattedMessage id="header.languageMenuTitle" /></LangTitle>
		<LangList>
			<LanguageLink languageName={constants.siteLanguages.pl} />
			<LanguageLink languageName={constants.siteLanguages.en} />
		</LangList>
	</LangWrapper>
);

export default LanguageMenu;
