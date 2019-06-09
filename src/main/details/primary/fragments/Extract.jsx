import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';

import { BeverageDetailsContext, LanguageContext } from 'config';
import { DT, DD, Highlight } from 'elements';
import { addSectionSeparator, getExtractValues } from 'main/details/utils';

const Extract = () => {
	const { beverage } = useContext(BeverageDetailsContext);
	const { language } = useContext(LanguageContext);

	const formattedValue = getExtractValues(beverage)
		.map(({ type, value: { relate, unit, value } }) => (
			<Highlight
				key={`${type} ${value}`}
				type={type}
			>
				{new Intl.NumberFormat(language).format(value)}
				<FormattedMessage id={`extractUnit.${unit}`} />
				{' '}
				<FormattedMessage id={`extractRelate.${relate}`} />
			</Highlight>
		))
		.reduce(addSectionSeparator, []);

	return formattedValue.length ? (
		<>
			<DT><FormattedMessage id="details.extract" /></DT>
			<DD>{ formattedValue }</DD>
		</>
	) : null;
};

export default Extract;
