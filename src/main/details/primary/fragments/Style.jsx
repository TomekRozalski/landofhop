import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';

import { BeverageDetailsContext, LanguageContext } from 'config';
import { DT, DD, Highlight } from 'elements';
import {
	addItemSeparator,
	addSectionSeparator,
	getStyleValues,
	isSeparator,
} from 'main/details/utils';

const Style = () => {
	const { beverage } = useContext(BeverageDetailsContext);
	const { language: siteLanguage } = useContext(LanguageContext);

	const formattedValues = getStyleValues(beverage)
		.reduce(addSectionSeparator, [])
		.reduce((sectionsAccumulator, currentSection) => {
			if (isSeparator(currentSection)) {
				return [...sectionsAccumulator, currentSection];
			}

			const typeArray = currentSection.value
				.map(({ language, value }) => (
					<Highlight
						key={`${currentSection.type} ${value}`}
						lang={language === siteLanguage ? null : language}
						type={currentSection.type}
					>
						{ value }
					</Highlight>
				))
				.reduce(addItemSeparator, []);

			return [...sectionsAccumulator, ...typeArray];
		}, []);

	return formattedValues.length ? (
		<>
			<DT><FormattedMessage id="details.style" /></DT>
			<DD>{ formattedValues }</DD>
		</>
	) : null;
};

export default Style;
