import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';

import { BeverageDetailsContext } from 'config';
import { DT, DD, Highlight } from 'elements';
import { addSectionSeparator, getFiltrationValues } from 'main/details/utils';

const Filtration = () => {
	const { beverage } = useContext(BeverageDetailsContext);

	const formattedValues = getFiltrationValues(beverage)
		.map(({ type, value }) => (
			<Highlight key={type} type={type}>
				<FormattedMessage id={`details.${value ? 'yes' : 'no'}`} />
			</Highlight>
		))
		.reduce(addSectionSeparator, []);

	return formattedValues.length ? (
		<>
			<DT><FormattedMessage id="details.filtration" /></DT>
			<DD>{ formattedValues }</DD>
		</>
	) : null;
};

export default Filtration;
