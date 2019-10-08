/* eslint-disable no-shadow */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { get } from 'lodash';
import { FormattedMessage } from 'react-intl';

import { BeverageDetailsContext } from 'config';
import { constants } from 'utils';
import { Highlight } from 'elements';
import { fonts } from 'utils/theme';

const Wrapper = styled.div`
	font: 300 1.5rem / 2.2rem ${fonts.primary};
`;

const Series = () => {
	const { beverage } = useContext(BeverageDetailsContext);

	const labelValues = get(beverage, 'label.general.series');
	const producerValues = get(beverage, 'producer.general.series');

	const { separators, type } = constants.details;

	const contracts = [
		{ type: type.label, value: labelValues },
		{ type: type.producer, value: producerValues },
	];

	const formattedValue = contracts
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
		.reduce((acc, curr) => {
			if (curr !== separators.section) {
				const typeArray = curr.value
					.reduce((acc, curr) => (
						acc.length
							? [...acc, separators.item, curr]
							: [curr]
					), [])
					.map(item => (
						item === separators.item
							? item
							: <span key={item.value} lang={item.language}>{item.value}</span>
					));

				const withHighligh = (
					<Highlight key={curr.type} type={curr.type}>
						<FormattedMessage
							id="details.fromSeries"
							values={{ series: <>{typeArray}</> }}
						/>
					</Highlight>
				);

				return [...acc, withHighligh];
			}

			return [...acc, curr];
		}, []);

	return formattedValue.length ? (
		<Wrapper>{ formattedValue }</Wrapper>
	) : null;
};

export default Series;
