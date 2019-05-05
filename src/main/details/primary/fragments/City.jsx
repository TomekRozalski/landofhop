import React, { useContext } from 'react';
import { get } from 'lodash';
import { FormattedMessage } from 'react-intl';

import { BeverageDetailsContext, LanguageContext } from 'config';
import { constants } from 'utils';
import { getNameByLanguage } from 'utils/helpers';
import { DT, DD, Highlight } from 'elements';

const City = () => {
	const { beverage } = useContext(BeverageDetailsContext);
	const { language } = useContext(LanguageContext);

	const labelValues = get(beverage, 'label.general.place.city');
	const producerValues = get(beverage, 'producer.general.place.city');
	const editorialValues = get(beverage, 'editorial.general.place.city');

	const { separators, type } = constants.details;

	const contracts = [
		{ type: type.label, value: labelValues },
		{ type: type.producer, value: producerValues },
		{ type: type.editorial, value: editorialValues },
	];

	const formattedValue = contracts
		.reduce((acc, curr) => {
			if (!acc.length && curr.value) {
				return [curr];
			}

			return (
				curr.value
					? [...acc, separators.section, curr]
					: acc
			);
		}, [])
		.map((item) => {
			if (item === separators.section) {
				return item;
			}

			const {
				value: city,
				language: cityLanguage,
			} = getNameByLanguage({ values: item.value, language });

			return (
				<Highlight
					key={`${item.type} ${city}`}
					lang={cityLanguage === language ? null : cityLanguage}
					type={item.type}
				>
					{ city }
				</Highlight>
			);
		});

	return formattedValue.length ? (
		<>
			<DT><FormattedMessage id="details.city" /></DT>
			<DD>{ formattedValue }</DD>
		</>
	) : null;
};

export default City;
