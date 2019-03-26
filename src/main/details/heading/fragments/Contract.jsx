import React, { useContext } from 'react';
import styled from 'styled-components';
import { get } from 'lodash';
import { FormattedMessage } from 'react-intl';

import { BeverageDetailsContext, LanguageContext } from 'config';
// import { getNameByLanguage } from 'utils/helpers';
import { fonts } from 'utils/theme';

const Wrapper = styled.h1`
	font: 300 1.5rem / 2.2rem ${fonts.primary};
`;

const Contract = () => {
	const { beverage } = useContext(BeverageDetailsContext);
	// const { language } = useContext(LanguageContext);

	const labelValues = get(beverage, 'label.general.contract');
	const producerValues = get(beverage, 'producer.general.contract');
	const editorialValues = get(beverage, 'editorial.general.contract');

	// console.log('-->', labelValues, producerValues, editorialValues);

	// const formattedName = getNameByLanguage({ values, language });

	return (
		<Wrapper>
			<FormattedMessage
				id="details.contractor"
				values={{
					brand: 'Browar Miś',
				}}
			/>
		</Wrapper>
	);
};

export default Contract;
