import React, { useContext } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { get } from 'lodash';

import { BeverageDetailsContext, LanguageContext } from 'config';
import { getNameByLanguage } from 'utils/helpers';
import { colors, fonts } from 'utils/theme';

const Wrapper = styled.span`
	font: 400 1.5rem / 1 ${fonts.primary};
	color: ${colors.gray[200]};
`;

const Consortium = () => {
	const { beverage } = useContext(BeverageDetailsContext);
	const { language } = useContext(LanguageContext);

	const names = get(beverage, 'label.general.brand.consortium');
	const { language: valueLanguage, value } = getNameByLanguage({ values: names, language });
	const langAttribute = valueLanguage && valueLanguage !== language
		? valueLanguage
		: null;

	return (
		<Wrapper>
			<FormattedMessage
				id="details.owner"
				values={{ brand: <span lang={langAttribute}>{ value }</span> }}
			/>
		</Wrapper>
	);
};

export default Consortium;
