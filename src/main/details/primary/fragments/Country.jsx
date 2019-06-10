import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';

import { BeverageDetailsContext, LanguageContext } from 'config';
import { getNameByLanguage } from 'utils/helpers';
import { DT, DD, Highlight } from 'elements';
import { addSectionSeparator, getCountryValues } from 'main/details/utils';

const Country = () => {
	const { beverage } = useContext(BeverageDetailsContext);
	const { language: siteLanguage } = useContext(LanguageContext);

	const formattedValue = getCountryValues(beverage)
		.map(({ type, value }) => ({
			type,
			value: getNameByLanguage({ values: value, language: siteLanguage }),
		}))
		.map(({ type, value: { language, value } }) => (
			<Highlight
				key={`${type} ${value}`}
				lang={language === siteLanguage ? null : language}
				type={type}
			>
				{ value }
			</Highlight>
		))
		.reduce(addSectionSeparator, []);

	return formattedValue.length ? (
		<>
			<DT><FormattedMessage id="details.country" /></DT>
			<DD>{ formattedValue }</DD>
		</>
	) : null;
};

export default Country;
