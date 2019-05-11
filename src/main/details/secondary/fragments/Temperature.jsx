/* eslint-disable no-shadow */
import React, { useContext } from 'react';
import { get } from 'lodash';
import { FormattedMessage } from 'react-intl';

import { BeverageDetailsContext } from 'config';
import { constants } from 'utils';
import { DT, DD, Highlight } from 'elements';

const Temperature = () => {
	const { beverage } = useContext(BeverageDetailsContext);

	const labelValue = get(beverage, 'label.impressions.temperature');
	const producerValue = get(beverage, 'producer.impressions.temperature');

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
					from,
					to,
					unit,
				},
			} = item;

			return (
				<Highlight
					key={type}
					type={type}
				>
					{from === to ? (
						<>
							{from}
							<FormattedMessage id={`details.temperature.unit.${unit}`} />
						</>
					) : (
						<>
							<FormattedMessage
								id="details.temperature.scope"
								values={{ from, to }}
							/>
							<FormattedMessage id={`details.temperature.unit.${unit}`} />
						</>
					)}
				</Highlight>
			);
		});

	return formattedValue.length ? (
		<>
			<DT><FormattedMessage id="details.temperature" /></DT>
			<DD>{ formattedValue }</DD>
		</>
	) : null;
};

export default Temperature;
