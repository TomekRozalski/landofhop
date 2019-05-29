/* eslint-disable no-shadow */
import React, { useContext } from 'react';
import { get } from 'lodash';
import { FormattedMessage } from 'react-intl';

import { BeverageDetailsContext, LanguageContext } from 'config';
import { constants } from 'utils';
import { DT, DD, Highlight } from 'elements';

const Style = () => {
	const { beverage } = useContext(BeverageDetailsContext);
	const { language } = useContext(LanguageContext);

	const labelStyles = get(beverage, 'label.brewing.style', []);
	const producerStyles = get(beverage, 'producer.brewing.style', []);
	const editorialStyles = get(beverage, 'editorial.brewing.style', []);

	const { separators, type } = constants.details;

	const styles = [
		{ type: type.label, value: labelStyles },
		{ type: type.producer, value: producerStyles },
		{ type: type.editorial, value: editorialStyles },
	];

	const formattedStyles = styles
		.reduce((acc, curr) => {
			if (!acc.length && curr.value.length) {
				return [curr];
			}

			return (
				curr.value.length
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
						item === separators.item ? item : (
							<Highlight
								key={`${curr.type} ${item.value}`}
								lang={item.language === language ? null : item.language}
								type={curr.type}
							>
								{ item.value }
							</Highlight>
						)
					));

				return [...acc, ...typeArray];
			}

			return [...acc, curr];
		}, []);

	console.log('formattedStyles', formattedStyles);

	return formattedStyles.length ? (
		<>
			<DT><FormattedMessage id="details.style" /></DT>
			<DD>{ formattedStyles }</DD>
		</>
	) : null;
};

export default Style;
