import React, { useContext } from 'react';
import styled from 'styled-components';
import { get } from 'lodash';

import { BeverageDetailsContext, LanguageContext } from 'config';
import { getNameByLanguage } from 'utils/helpers';
import { fonts } from 'utils/theme';

const Wrapper = styled.h1`
	font: 500 3.5rem / 4.5rem ${fonts.primary};
`;

const Name = () => {
	const { beverage } = useContext(BeverageDetailsContext);
	const { language } = useContext(LanguageContext);

	const names = get(beverage, 'label.general.name');
	const { language: valueLanguage, value } = getNameByLanguage({ values: names, language });
	const langAttribute = valueLanguage && valueLanguage !== language
		? valueLanguage
		: null;

	return (
		<Wrapper lang={langAttribute}>{ value }</Wrapper>
	);
};

export default Name;
