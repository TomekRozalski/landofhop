/* eslint-disable no-shadow */
import React, { useContext } from 'react';
import { get } from 'lodash';
import { FormattedMessage } from 'react-intl';

import { BeverageDetailsContext } from 'config';
import { constants } from 'utils';
import { DT, DD, Highlight } from 'elements';

const Fermentation = () => {
	const { beverage } = useContext(BeverageDetailsContext);

	const labelValue = get(beverage, 'label.brewing.fermentation', []);
	const producerValue = get(beverage, 'producer.brewing.fermentation', []);
	const editorialValue = get(beverage, 'editorial.brewing.fermentation', []);

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
					.map(item => (
						item === separators.item ? item : (
							<Highlight
								key={`${curr.type} ${item}`}
								type={curr.type}
							>
								<FormattedMessage id={`fermentationType.${item}`} />
							</Highlight>
						)
					));

				return [...acc, ...typeArray];
			}

			return [...acc, curr];
		}, []);

	return formattedValues.length ? (
		<>
			<DT><FormattedMessage id="details.fermentation" /></DT>
			<DD>{ formattedValues }</DD>
		</>
	) : null;
};

export default Fermentation;
