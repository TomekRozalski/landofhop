import React, { useContext } from 'react';
import { get } from 'lodash';
import { Helmet } from 'react-helmet';

import { BeverageDetailsContext, LanguageContext } from 'config';
import { getNameByLanguage } from 'utils/helpers';

const Meta = () => {
	const { beverage } = useContext(BeverageDetailsContext);
	const { language } = useContext(LanguageContext);

	const names = get(beverage, 'label.general.name');
	const { value: name } = getNameByLanguage({ values: names, language });

	const brandNames = get(beverage, 'label.general.brand.name');
	const { value: brand } = getNameByLanguage({ values: brandNames, language });

	return (
		<Helmet><title>{`Land of Hop. ${brand}. ${name}`}</title></Helmet>
	);
};

export default Meta;
