import React, { useContext } from 'react';
import { get, isBoolean } from 'lodash';
import { FormattedMessage } from 'react-intl';

import { BeverageDetailsContext } from 'config';
import { constants } from 'utils';
import { DT, DD, Highlight } from 'elements';

const DryHopped = () => {
	const { beverage } = useContext(BeverageDetailsContext);

	const labelValue = get(beverage, 'label.brewing.dryHopped');
	const producerValue = get(beverage, 'producer.brewing.dryHopped');
	const editorialValue = get(beverage, 'editorial.brewing.dryHopped');

	const { separators, type } = constants.details;

	const values = [
		{ type: type.label, value: labelValue },
		{ type: type.producer, value: producerValue },
		{ type: type.editorial, value: editorialValue },
	];

	const formattedValues = values
		.reduce((acc, curr) => {
			if (!acc.length && isBoolean(curr.value)) {
				return [curr];
			}

			return (
				isBoolean(curr.value)
					? [...acc, separators.section, curr]
					: acc
			);
		}, [])
		.map((item) => {
			if (item === separators.section) {
				return item;
			}

			return (
				<Highlight key={item.type} type={item.type}>
					<FormattedMessage id={`details.${item.value ? 'yes' : 'no'}`} />
				</Highlight>
			);
		});

	return formattedValues.length ? (
		<>
			<DT><FormattedMessage id="details.dryHopped" /></DT>
			<DD>{ formattedValues }</DD>
		</>
	) : null;
};

export default DryHopped;
