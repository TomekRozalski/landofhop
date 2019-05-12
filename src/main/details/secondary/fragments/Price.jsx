/* eslint-disable no-shadow */
import React, { useContext } from 'react';
import { get } from 'lodash';
import { FormattedMessage } from 'react-intl';

import { BeverageDetailsContext } from 'config';
import { constants } from 'utils';
import { DT, DD, Highlight } from 'elements';

const Price = () => {
	const { beverage } = useContext(BeverageDetailsContext);

	const labelValue = get(beverage, 'label.price', []);
	const producerValue = get(beverage, 'producer.price', []);
	const editorialValue = get(beverage, 'editorial.price', []);

	const { separators, type } = constants.details;

	const values = [
		{ type: type.label, value: labelValue },
		{ type: type.producer, value: producerValue },
		{ type: type.editorial, value: editorialValue },
	];

	const formattedValues = values
		.reduce((acc, curr) => {
			if (!acc.length && curr.value.length) {
				return [curr];
			}

			return (
				curr.value.length
					? [...acc, separators.section, curr]
					: acc
			);
		}, [])
		.reduce((acc, curr) => {
			if (curr !== separators.section) {
				const typeArray = curr.value
					.reduce((acc, curr) => (
						acc.length
							? [...acc, separators.item, curr]
							: [curr]
					), [])
					.map(item => (item === separators.item ? item : (
						<Highlight
							key={`${curr.type} ${item.date}`}
							type={curr.type}
						>
							{item.value}
							{' '}
							<FormattedMessage id={`currency.${item.currency}`} />
						</Highlight>
					)));

				return [...acc, ...typeArray];
			}

			return [...acc, curr];
		}, []);

	return formattedValues.length ? (
		<>
			<DT><FormattedMessage id="details.price" /></DT>
			<DD>{ formattedValues }</DD>
		</>
	) : null;
};

export default Price;
