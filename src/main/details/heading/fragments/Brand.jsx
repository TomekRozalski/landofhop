import React, { useContext } from 'react';
import styled from 'styled-components';
import { get } from 'lodash';

import { BeverageDetailsContext, LanguageContext } from 'config';
import { getNameByLanguage } from 'utils/helpers';
import { fonts } from 'utils/theme';

const Wrapper = styled.div`
	font: 400 2rem / 3.5rem ${fonts.primary};
`;

const Brand = () => {
	const { beverage } = useContext(BeverageDetailsContext);
	const { language } = useContext(LanguageContext);

	const values = get(beverage, 'label.general.brand.name');
	const formattedBrand = getNameByLanguage({ values, language });

	return <Wrapper>{ formattedBrand }</Wrapper>;
};

export default Brand;
