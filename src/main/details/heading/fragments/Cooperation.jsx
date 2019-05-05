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
	margin: .5rem 0;
	font: 300 1.5rem / 2.2rem ${fonts.primary};
`;

const Cooperation = () => {
	const { beverage } = useContext(BeverageDetailsContext);
	const { language } = useContext(LanguageContext);

	const labelValues = get(beverage, 'label.general.cooperation');
	const producerValues = get(beverage, 'producer.general.cooperation');
	const editorialValues = get(beverage, 'editorial.general.cooperation');

	const { separators, type } = constants.details;

	const cooperations = [
		{ type: type.label, value: labelValues },
		{ type: type.producer, value: producerValues },
		{ type: type.editorial, value: editorialValues },
	];

	const formattedValue = cooperations
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
					.reduce((acc, curr) => {
						const formattedName = getNameByLanguage({ values: curr.name, language });

						return (
							acc.length
								? [...acc, separators.item, formattedName]
								: [formattedName]
						);
					}, [])
					.map(item => (
						item === separators.item
							? item
							: <span key={item.value} lang={item.language}>{item.value}</span>
					));

				const withHighligh = (
					<Highlight key={curr.type} type={curr.type}>
						<FormattedMessage
							id="details.cooperator"
							values={{ brand: <>{typeArray}</> }}
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

export default Cooperation;
