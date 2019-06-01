import React, { useContext } from 'react';
import styled from 'styled-components';
import { get } from 'lodash';
import { FormattedMessage } from 'react-intl';

import { BeverageDetailsContext } from 'config';
import { constants } from 'utils';
import { DT, DD, Highlight } from 'elements';

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

	const labelValue = get(beverage, 'label.brewing.aged');
	const producerValue = get(beverage, 'producer.brewing.aged');
	const editorialValue = get(beverage, 'editorial.brewing.aged');

	const { separators, type } = constants.details;

	const values = [
		{ type: type.label, value: labelValue },
		{ type: type.producer, value: producerValue },
		{ type: type.editorial, value: editorialValue },
	];

	const formattedValues = values
		.reduce((acc, curr) => {
			if (!acc.length && curr.value) {
				return [curr];
			}

			return (
				curr.value
					? [...acc, separators.section, curr]
					: acc
			);
		}, [])
		.map((item) => {
			if (item === separators.section) {
				return item;
			}

			const types = item.value.type.map(type => (
				<TypesWrapper>
					<FormattedMessage id={`agedType.${type}`} />
				</TypesWrapper>
			));

			return (
				<Highlight key={item.type} type={item.type}>
					<FormattedMessage id={`details.${item.value ? 'yes' : 'no'}`} />
					{types}
				</Highlight>
			);
		});

	return formattedValues.length ? (
		<>
			<DT><FormattedMessage id="details.aged" /></DT>
			<DD>{ formattedValues }</DD>
		</>
	) : null;
};

export default Aged;
