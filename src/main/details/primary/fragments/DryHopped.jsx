/* eslint-disable no-shadow */
import React, { useContext } from 'react';
import styled from 'styled-components';
import {
	get,
	isArray,
	isBoolean,
	isUndefined,
} from 'lodash';
import { FormattedMessage } from 'react-intl';

import { BeverageDetailsContext, LanguageContext } from 'config';
import { constants } from 'utils';
import { getNameByLanguage } from 'utils/helpers';
import { DT, DD, Highlight } from 'elements';

const HopList = styled.ul`
	display: inline;

	::before {
		content: ' (';
	}

	::after {
		content: ')';
	}

	li {
		display: inline;
	}
`;

const DryHopped = () => {
	const { beverage } = useContext(BeverageDetailsContext);
	const { language } = useContext(LanguageContext);

	const labelValue = get(beverage, 'label.brewing.dryHopped');
	const producerValue = get(beverage, 'producer.brewing.dryHopped');
	const editorialValue = get(beverage, 'editorial.brewing.dryHopped');

	const { separators, type } = constants.details;

	const values = [
		{ type: type.label, value: labelValue },
		{ type: type.producer, value: producerValue },
		{ type: type.editorial, value: editorialValue },
	];

	const formattedValues = values
		.reduce((acc, curr) => {
			if (!acc.length && !isUndefined(curr.value)) {
				return [curr];
			}

			return (
				!isUndefined(curr.value)
					? [...acc, separators.section, curr]
					: acc
			);
		}, [])
		.map((item) => {
			if (item === separators.section) {
				return item;
			}

			if (isBoolean(item.value)) {
				return (
					<Highlight key={item.type} type={item.type}>
						<FormattedMessage id={`details.${item.value ? 'yes' : 'no'}`} />
					</Highlight>
				);
			}

			if (isArray(item.value)) {
				const typeArray = item.value
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
							: (
								<li
									key={item.value}
									lang={item.language === language ? null : item.language}
								>
									{item.value}
								</li>
							)
					));

				return (
					<Highlight key={item.type} type={item.type}>
						<FormattedMessage id="details.yes" />
						<HopList>{ typeArray }</HopList>
					</Highlight>
				);
			}

			return null;
		});

	return formattedValues.length ? (
		<>
			<DT><FormattedMessage id="details.dryHopped" /></DT>
			<DD>{ formattedValues }</DD>
		</>
	) : null;
};

export default DryHopped;
