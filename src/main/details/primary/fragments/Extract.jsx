/* eslint-disable no-shadow, react/prop-types */
import React, { useContext } from 'react';
import { get } from 'lodash';
import { FormattedMessage } from 'react-intl';

import { BeverageDetailsContext, LanguageContext } from 'config';
import { constants } from 'utils';
import { DT, DD, Highlight } from 'elements';

const Extract = () => {
	const { beverage } = useContext(BeverageDetailsContext);
	const { language } = useContext(LanguageContext);

	const labelValue = get(beverage, 'label.brewing.extract');
	const producerValue = get(beverage, 'producer.brewing.extract');

	const { separators, type } = constants.details;

	const extract = [
		{ type: type.label, value: labelValue },
		{ type: type.producer, value: producerValue },
	];

	const formattedValue = extract
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

			const formatExtract = ({ relate, unit, value }) => {
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

				return (
					<>
						{formattedValue}
						{formattedUnit}
						{' '}
						<FormattedMessage id={`extractRelate.${relate}`} />
					</>
				);
			};

			return (
				<Highlight
					key={`${item.type} ${item.value.value}`}
					type={item.type}
				>
					{formatExtract(item.value)}
				</Highlight>
			);
		});

	return formattedValue.length ? (
		<>
			<DT><FormattedMessage id="details.extract" /></DT>
			<DD>{ formattedValue }</DD>
		</>
	) : null;
};

export default Extract;
