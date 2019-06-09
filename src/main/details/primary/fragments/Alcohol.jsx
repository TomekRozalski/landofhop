import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';

import { BeverageDetailsContext, LanguageContext } from 'config';
import { DT, DD, Highlight } from 'elements';
import { addSectionSeparator, getAlcoholValues } from 'main/details/utils';

const Alcohol = () => {
	const { beverage } = useContext(BeverageDetailsContext);
	const { language } = useContext(LanguageContext);

	const formattedValue = getAlcoholValues(beverage)
		.map(({
			type,
			value: {
				relate,
				scope,
				unit,
				value,
			},
		}) => (
			<Highlight
				key={`${type} ${value}`}
				type={type}
			>
				{value && new Intl.NumberFormat(language).format(value)}
				{unit && <FormattedMessage id={`alcoholUnit.${unit}`} />}
				{' '}
				{ relate && <FormattedMessage id={`alcoholRelate.${relate}`} /> }
				{scope && (type === 'editorial' ? ` ${scope}` : ` (${scope})`)}
			</Highlight>
		))
		.reduce(addSectionSeparator, []);

	return formattedValue.length ? (
		<>
			<DT><FormattedMessage id="details.alcohol" /></DT>
			<DD>{ formattedValue }</DD>
		</>
	) : null;
};

export default Alcohol;
