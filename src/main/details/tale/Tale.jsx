/* eslint-disable no-shadow */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { get } from 'lodash';
import Markdown from 'markdown-to-jsx';

import { BeverageDetailsContext, LanguageContext } from 'config';
import { constants } from 'utils';
import { colors } from 'utils/theme';
import { Highlight } from 'elements';

const Wrapper = styled.div`
	grid-column: 3 / 5;
	${({ empty }) => (!empty && `
		border-width: 1px 0;
		border-style: dotted;
		border-color: ${colors.gray[400]};
		padding: .5rem 0;
	`)}
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
		.filter(item => item.value.find(description => description.language === language))
		.reduce((acc, { type, value }) => [
			...acc,
			{
				type,
				value: value.find(description => description.language === language),
			},
		], [])
		.map(({ type, value }) => (
			<Highlight
				key={type}
				lang={value.language === language ? null : value.language}
				type={type}
				block
			>
				<Markdown options={{ forceInline: true }}>{ value.value }</Markdown>
			</Highlight>
		));

	return formattedValues.length
		? <Wrapper>{formattedValues}</Wrapper>
		: <Wrapper empty />;
};

export default Tale;
