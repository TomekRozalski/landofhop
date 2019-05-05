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

const Wrapper = styled.p`
	font: 300 1.5rem / 2.2rem ${fonts.primary};
`;

const Contract = () => {
	const { beverage } = useContext(BeverageDetailsContext);
	const { language } = useContext(LanguageContext);

	const labelValues = get(beverage, 'label.general.contract');
	const producerValues = get(beverage, 'producer.general.contract');
	const editorialValues = get(beverage, 'editorial.general.contract');

	const { separators, type } = constants.details;

	const contracts = [
		{ type: type.label, value: labelValues },
		{ type: type.producer, value: producerValues },
		{ type: type.editorial, value: editorialValues },
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
				value: brand,
				language: brandLanguage,
			} = getNameByLanguage({ values: item.value.name, language });

			return (
				<Highlight
					key={brand}
					lang={brandLanguage === language ? null : brandLanguage}
					type={item.type}
				>
					<FormattedMessage
						id="details.contractor"
						values={{ brand }}
					/>
				</Highlight>
			);
		});

	return formattedValue.length ? (
		<Wrapper>{ formattedValue }</Wrapper>
	) : null;
};

export default Contract;
