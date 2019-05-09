import React, { useContext } from 'react';
import styled from 'styled-components';
import { get } from 'lodash';

import { BeverageDetailsContext, LanguageContext } from 'config';
import { constants } from 'utils';
import { getNameByLanguage } from 'utils/helpers';
import { Highlight } from 'elements';

const Wrapper = styled.div`
	grid-column: 3 / 5;
`;

const Tale = () => {
	const { beverage } = useContext(BeverageDetailsContext);
	const { language } = useContext(LanguageContext);

	const labelValue = get(beverage, 'label.general.tale', []);
	const producerValue = get(beverage, 'producer.general.tale', []);

	const { type } = constants.details;

	const values = [
		{ type: type.label, value: labelValue },
		{ type: type.producer, value: producerValue },
	];

	const formattedValues = values
		.reduce((acc, curr) => {
			if (!acc.length && curr.value.length) {
				return [curr];
			}

			return (
				curr.value.length
					? [...acc, curr]
					: acc
			);
		}, [])
		.map((item) => {
			const {
				value: tale,
				language: taleLanguage,
			} = getNameByLanguage({ values: item.value, language });

			return (
				<div>
					<Highlight
						key={item.type}
						lang={taleLanguage === language ? null : taleLanguage}
						type={item.type}
					>
						{ tale }
					</Highlight>
					<hr />
				</div>
			);
		});

	return formattedValues.length ? (
		<Wrapper>
			{formattedValues}
		</Wrapper>
	) : null;
};

export default Tale;
