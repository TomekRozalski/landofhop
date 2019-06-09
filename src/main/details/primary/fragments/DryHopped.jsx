import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';

import { BeverageDetailsContext, LanguageContext } from 'config';
import { getNameByLanguage } from 'utils/helpers';
import { DT, DD, Highlight } from 'elements';
import { addItemSeparator, addSectionSeparator, getDryHoppedValues } from 'main/details/utils';
import { SmallList } from '../elements';

const DryHopped = () => {
	const { beverage } = useContext(BeverageDetailsContext);
	const { language: siteLanguage } = useContext(LanguageContext);

	const formattedValues = getDryHoppedValues(beverage)
		.map(({ type, value }) => {
			if (value.length) {
				const typeArray = value
					.map(item => getNameByLanguage({ values: item.name, language: siteLanguage }))
					.map(({ language, value: singleHop }) => (
						<li
							key={singleHop}
							lang={language === siteLanguage ? null : language}
						>
							{singleHop}
						</li>
					))
					.reduce(addItemSeparator, []);

				return (
					<Highlight key={type} type={type}>
						<FormattedMessage id="details.yes" />
						<SmallList>{ typeArray }</SmallList>
					</Highlight>
				);
			}

			return (
				<Highlight key={type} type={type}>
					<FormattedMessage id={`details.${value ? 'yes' : 'no'}`} />
				</Highlight>
			);
		})
		.reduce(addSectionSeparator, []);

	return formattedValues.length ? (
		<>
			<DT><FormattedMessage id="details.dryHopped" /></DT>
			<DD>{ formattedValues }</DD>
		</>
	) : null;
};

export default DryHopped;
