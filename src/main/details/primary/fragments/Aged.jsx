import React, { useContext } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { BeverageDetailsContext } from 'config';
import { DT, DD, Highlight } from 'elements';

import { addSectionSeparator, getAgedValues } from 'main/details/utils';

const TypesWrapper = styled.span`
	::before {
		content: ' (';
	}

	::after {
		content: ')';
	}
`;

const Aged = () => {
	const { beverage } = useContext(BeverageDetailsContext);

	const getAgedDetails = (value, section) => (
		value.map(({
			previousContent,
			time,
			type,
			wood,
		}, i) => (
			// eslint-disable-next-line react/no-array-index-key
			<TypesWrapper key={`${section} ${i}`}>
				{ type && <FormattedMessage id={`aged.type.${type}`} />}
				{ wood && <FormattedMessage id={`aged.wood.${wood}`} /> }
				{ time && <span>{`${time.value} ${time.unit}`}</span> }
				{ previousContent && <span>{previousContent.join(', ')}</span> }
			</TypesWrapper>
		))
	);

	const formattedValues = getAgedValues(beverage)
		.map(({ type, value }) => (
			<Highlight key={type} type={type}>
				<FormattedMessage id={`details.${value ? 'yes' : 'no'}`} />
				{getAgedDetails(value, type)}
			</Highlight>
		))
		.reduce(addSectionSeparator, []);

	return formattedValues.length ? (
		<>
			<DT><FormattedMessage id="details.aged" /></DT>
			<DD>{ formattedValues }</DD>
		</>
	) : null;
};

export default Aged;
