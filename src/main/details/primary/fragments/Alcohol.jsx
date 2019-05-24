/* eslint-disable no-shadow, react/prop-types */
import React, { useContext } from 'react';
import { get } from 'lodash';
import { FormattedMessage } from 'react-intl';

import { BeverageDetailsContext, LanguageContext } from 'config';
import { constants } from 'utils';
import { DT, DD, Highlight } from 'elements';

const Alcohol = () => {
	const { beverage } = useContext(BeverageDetailsContext);
	const { language } = useContext(LanguageContext);

	const labelValue = get(beverage, 'label.brewing.alcohol');
	const producerValue = get(beverage, 'producer.brewing.alcohol');
	const editorialValue = get(beverage, 'editorial.brewing.alcohol');

	const { separators, type } = constants.details;

	const alcohol = [
		{ type: type.label, value: labelValue },
		{ type: type.producer, value: producerValue },
		{ type: type.editorial, value: editorialValue },
	];

	const formattedValue = alcohol
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

			const formatAlcohol = ({
				scope = '',
				relate = '',
				unit = '',
				value = '',
			}) => {
				const formattedValue = language === constants.siteLanguages.pl
					? value.toString().replace('.', ',')
					: value.toString();

				let formattedUnit;

				switch (unit) {
				case constants.extract.units.percent:
					formattedUnit = '%';
					break;
				case constants.extract.units.degree:
					formattedUnit = '°';
					break;
				default:
					formattedUnit = '';
					break;
				}

				let formattedScope;

				if (scope) {
					if (item.type === 'editorial') {
						formattedScope = ` ${scope}`;
					} else {
						formattedScope = ` (${scope})`;
					}
				}

				return (
					<>
						{formattedValue}
						{formattedUnit}
						{' '}
						{ relate && <FormattedMessage id={`alcoholRelate.${relate}`} /> }
						{formattedScope}
					</>
				);
			};

			return (
				<Highlight
					key={`${item.type} ${item.value.value}`}
					type={item.type}
				>
					{formatAlcohol(item.value)}
				</Highlight>
			);
		});

	return formattedValue.length ? (
		<>
			<DT><FormattedMessage id="details.alcohol" /></DT>
			<DD>{ formattedValue }</DD>
		</>
	) : null;
};

export default Alcohol;
