/* eslint-disable no-shadow */
import React, { useContext } from 'react';
import { get } from 'lodash';
import { FormattedMessage } from 'react-intl';

import { BeverageDetailsContext } from 'config';
import { constants } from 'utils';
import { DT, DD, Highlight } from 'elements';

const Fermentation = () => {
	const { beverage } = useContext(BeverageDetailsContext);

	const labelFermentations = get(beverage, 'label.brewing.fermentation', []);
	const producerFermentations = get(beverage, 'producer.brewing.fermentation', []);
	const editorialFermentations = get(beverage, 'editorial.brewing.fermentation', []);

	const { separators, type } = constants.details;

	const fermentations = [
		{ type: type.label, value: labelFermentations },
		{ type: type.producer, value: producerFermentations },
		{ type: type.editorial, value: editorialFermentations },
	];

	const formattedFermentations = fermentations
		.reduce((acc, curr) => (
			acc.length
				? [...acc, separators.section, curr]
				: [curr]
		), [])
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
							<Highlight type={curr.type}>
								<FormattedMessage
									key={`${curr.type} ${item}`}
									id={`fermentationType.${item}`}
								/>
							</Highlight>
						)
					));

				return [...acc, ...typeArray];
			}

			return [...acc, curr];
		}, []);

	return formattedFermentations.length ? (
		<>
			<DT><FormattedMessage id="details.fermentation" /></DT>
			<DD>{ formattedFermentations }</DD>
		</>
	) : null;
};

export default Fermentation;
