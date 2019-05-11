/* eslint-disable no-shadow */
import React, { useContext } from 'react';
import { get } from 'lodash';
import { FormattedMessage } from 'react-intl';

import { BeverageDetailsContext, LanguageContext } from 'config';
import { constants } from 'utils';
import { DT, DD, Highlight } from 'elements';

const Ingredients = () => {
	const { beverage } = useContext(BeverageDetailsContext);
	const { language } = useContext(LanguageContext);

	const labelValue = get(beverage, 'label.ingredients');
	const producerValue = get(beverage, 'producer.ingredients');

	const { separators, type } = constants.details;

	const values = [
		{ type: type.label, value: labelValue },
		{ type: type.producer, value: producerValue },
	];

	const formattedValue = values
		.filter(({ value }) => (
			value && value.description.find(description => description.language === language)
		))
		.reduce((acc, { type, value }) => {
			const formattedItem = {
				type,
				description: value.description.find(description => description.language === language),
			};

			return acc.length
				? [...acc, separators.section, formattedItem]
				: [formattedItem];
		}, [])
		.map((item) => {
			if (item === separators.section) {
				return item;
			}

			const {
				description: {
					complete,
					language: valueLanguage,
					value,
				},
				type,
			} = item;

			return (
				<React.Fragment key={type}>
					<DT><FormattedMessage id={`details.${complete ? 'ingredients' : 'contains'}`} /></DT>
					<DD>
						<Highlight
							lang={valueLanguage === language ? null : valueLanguage}
							type={type}
						>
							{ value }
						</Highlight>
					</DD>
				</React.Fragment>
			);
		});

	return formattedValue.length ? formattedValue : null;
};

export default Ingredients;
