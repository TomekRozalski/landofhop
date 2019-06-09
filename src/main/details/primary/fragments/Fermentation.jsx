import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';

import { BeverageDetailsContext } from 'config';
import { DT, DD, Highlight } from 'elements';
import {
	addItemSeparator,
	addSectionSeparator,
	getFermentationValues,
	isSeparator,
} from 'main/details/utils';

const Fermentation = () => {
	const { beverage } = useContext(BeverageDetailsContext);

	const formattedValues = getFermentationValues(beverage)
		.reduce(addSectionSeparator, [])
		.reduce((sectionsAccumulator, currentSection) => {
			if (isSeparator(currentSection)) {
				return [...sectionsAccumulator, currentSection];
			}

			const typeArray = currentSection.value
				.map(item => (
					<Highlight
						key={`${currentSection.type} ${item}`}
						type={currentSection.type}
					>
						<FormattedMessage id={`fermentationType.${item}`} />
					</Highlight>
				))
				.reduce(addItemSeparator, []);

			return [...sectionsAccumulator, ...typeArray];
		}, []);

	return formattedValues.length ? (
		<>
			<DT><FormattedMessage id="details.fermentation" /></DT>
			<DD>{ formattedValues }</DD>
		</>
	) : null;
};

export default Fermentation;
