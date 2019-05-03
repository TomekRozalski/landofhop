import React, { useContext } from 'react';
import { get } from 'lodash';
import { FormattedMessage } from 'react-intl';

import { BeverageDetailsContext, LanguageContext } from 'config';
import { getNameByLanguage } from 'utils/helpers';

import { DT, DD } from 'elements';

const City = () => {
	const { beverage } = useContext(BeverageDetailsContext);
	const { language } = useContext(LanguageContext);

	const names = get(beverage, 'label.general.place.city');

	if (!names) {
		return null;
	}

	const { language: valueLanguage, value } = getNameByLanguage({ values: names, language });
	const langAttribute = valueLanguage && valueLanguage !== language
		? valueLanguage
		: null;

	return (
		<>
			<DT><FormattedMessage id="details.city" /></DT>
			<DD lang={langAttribute}>{ value }</DD>
		</>
	);
};

export default City;
