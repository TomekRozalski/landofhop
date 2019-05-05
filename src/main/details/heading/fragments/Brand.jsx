import React, { useContext } from 'react';
import styled from 'styled-components';
import { get } from 'lodash';

import { BeverageDetailsContext, LanguageContext } from 'config';
import { getNameByLanguage } from 'utils/helpers';
import { fonts } from 'utils/theme';
import Consortium from './Consortium';

const Wrapper = styled.h3`
	display: inline-block;
	margin: 1rem .6rem 0 0;
	font: 400 2rem / 1 ${fonts.primary};
`;

const Brand = () => {
	const { beverage } = useContext(BeverageDetailsContext);
	const { language } = useContext(LanguageContext);

	const names = get(beverage, 'label.general.brand.name');
	const { language: valueLanguage, value } = getNameByLanguage({ values: names, language });
	const langAttribute = valueLanguage && valueLanguage !== language
		? valueLanguage
		: null;

	return (
		<>
			<Wrapper lang={langAttribute}>{ value }</Wrapper>
			<Consortium />
		</>
	);
};

export default Brand;
