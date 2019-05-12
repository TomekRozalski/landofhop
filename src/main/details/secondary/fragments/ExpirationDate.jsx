/* eslint-disable no-shadow */
import React, { useContext } from 'react';
import { get } from 'lodash';
import { FormattedMessage } from 'react-intl';

import { BeverageDetailsContext } from 'config';
import { constants } from 'utils';
import { DT, DD, Highlight } from 'elements';

const ExpirationDate = () => {
	const { beverage } = useContext(BeverageDetailsContext);

	const labelValue = get(beverage, 'label.brewing.expirationDate');
	const producerValue = get(beverage, 'producer.brewing.expirationDate');

	const { separators, type } = constants.details;

	const values = [
		{ type: type.label, value: labelValue },
		{ type: type.producer, value: producerValue },
	];

	const formattedValue = values
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
				type,
				value: {
					unit,
					value,
				},
			} = item;

			return (
				<Highlight
					key={type}
					type={type}
				>
					<FormattedMessage
						id={`details.expirationDate.unit.${unit}`}
						values={{ value }}
					/>
				</Highlight>
			);
		});

	return formattedValue.length ? (
		<>
			<DT><FormattedMessage id="details.expirationDate" /></DT>
			<DD>{ formattedValue }</DD>
		</>
	) : null;
};

export default ExpirationDate;
