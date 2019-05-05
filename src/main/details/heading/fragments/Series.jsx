/* eslint-disable no-shadow */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { get } from 'lodash';
import { FormattedMessage } from 'react-intl';

import { BeverageDetailsContext, LanguageContext } from 'config';
import { constants } from 'utils';
import { Highlight } from 'elements';
import { getNameByLanguage } from 'utils/helpers';
import { fonts } from 'utils/theme';

const Wrapper = styled.div`
	font: 300 1.5rem / 2.2rem ${fonts.primary};
`;

const Series = () => {
	const { beverage } = useContext(BeverageDetailsContext);
	const { language } = useContext(LanguageContext);

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
		.map((item) => {
			if (item === separators.section) {
				return item;
			}

			const {
				value: series,
				language: seriesLanguage,
			} = getNameByLanguage({ values: item.value, language });

			return (
				<Highlight
					key={`${item.type} ${series}`}
					lang={seriesLanguage === language ? null : seriesLanguage}
					type={item.type}
				>
					<FormattedMessage
						id="details.fromSeries"
						values={{ series }}
					/>
				</Highlight>
			);
		});

	return formattedValue.length ? (
		<Wrapper>{ formattedValue }</Wrapper>
	) : null;
};

export default Series;
