import React, { useContext } from 'react';
import styled from 'styled-components';
import { get } from 'lodash';


import { BeverageDetailsContext, LanguageContext } from 'config';
import { getNameByLanguage } from 'utils/helpers';
import { fonts } from 'utils/theme';

const Wrapper = styled.h1`
	font: 500 4rem / 6rem ${fonts.primary};
`;

const Name = () => {
	const { beverage } = useContext(BeverageDetailsContext);
	const { language } = useContext(LanguageContext);

	const values = get(beverage, 'label.general.name');
	const formattedName = getNameByLanguage({ values, language });

	return <Wrapper>{ formattedName }</Wrapper>;
};

export default Name;
