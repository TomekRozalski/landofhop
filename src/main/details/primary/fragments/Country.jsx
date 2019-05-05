/* eslint-disable no-shadow */
import React, { useContext } from 'react';
import { get } from 'lodash';
import { FormattedMessage } from 'react-intl';

import { BeverageDetailsContext, LanguageContext } from 'config';
import { constants } from 'utils';
import { getNameByLanguage } from 'utils/helpers';
import { DT, DD, Highlight } from 'elements';

const Country = () => {
	const { beverage } = useContext(BeverageDetailsContext);
	const { language } = useContext(LanguageContext);

	const labelValues = get(beverage, 'label.general.place.country.name');
	const producerValues = get(beverage, 'producer.general.place.country.name');
	const editorialValues = get(beverage, 'editorial.general.place.country.name');

	const { separators, type } = constants.details;

	const contracts = [
		{ type: type.label, value: labelValues },
		{ type: type.producer, value: producerValues },
		{ type: type.editorial, value: editorialValues },
	];

	const formattedValue = contracts
		.reduce((acc, { type, value }) => {
			if (!value) {
				return acc;
			}

			const formattedValue = getNameByLanguage({ values: value, language });
			const foundTheSame = acc.find(({ value }) => (value.value === formattedValue.value));

			if (foundTheSame) {
				return acc;
			}

			const formatted = {
				type,
				value: formattedValue,
			};

			if (!acc.length) {
				return [formatted];
			}

			return [...acc, separators.section, formatted];
		}, [])
		.map((item) => {
			if (item === separators.section) {
				return item;
			}

			return (
				<Highlight
					key={`${item.type} ${item.value.value}`}
					lang={item.value.language === language ? null : item.value.language}
					type={item.type}
				>
					{ item.value.value }
				</Highlight>
			);
		});

	return formattedValue.length ? (
		<>
			<DT><FormattedMessage id="details.country" /></DT>
			<DD>{ formattedValue }</DD>
		</>
	) : null;
};

export default Country;
