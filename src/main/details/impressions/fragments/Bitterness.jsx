import React, { useContext } from 'react';
import styled from 'styled-components';
import { get, isNumber } from 'lodash';
import { FormattedMessage } from 'react-intl';

import { BeverageDetailsContext } from 'config';
import { colors, fonts } from 'utils/theme';
import { constants } from 'utils';
import { Highlight } from 'elements';

export const DT = styled.dt`
    display: inline-block;
	width: 110px;
	padding-right: .5rem;
    font: 400 1.5rem / 2rem ${fonts.primary};
	text-align: right;
    color: ${colors.gray[100]};

    &::before {
        display: block;
        content: '';
    }

    &::after {
        content: ':';
    }
`;

const DD = styled.dd`
	display: inline-block;
	width: 110px;
	height: 1rem;
	margin: 0;
	border: 1px solid ${colors.gray[400]};
	overflow: hidden;
	position: relative;
	top: 1px;

	::before {
		display: block;
		width: 100%;
		height: 100%;
		content: '';
		background-color: ${colors.gray[700]};
		position: absolute;
		top: 0;
		left: 0;
	}

	::after {
		display: block;
		width: ${({ value }) => (value || 0)}px;
		height: 100%;
		content: '';
		background-color: ${colors.success.strong};
		position: absolute;
		top: 0;
		left: 0;
	}
`;


const Bitterness = () => {
	const { beverage } = useContext(BeverageDetailsContext);

	const labelValues = get(beverage, 'label.impressions.bitterness');
	const producerValues = get(beverage, 'producer.impressions.bitterness');

	const { separators, type } = constants.details;

	const values = [
		{ type: type.label, value: labelValues },
		{ type: type.producer, value: producerValues },
	];

	const formattedValues = values
		.filter(item => isNumber(item.value))
		.map((item) => {
			console.log('item', item);

			// return (
			// 	<Highlight
			// 		key={`${item.type} ${city}`}
			// 		lang={cityLanguage === language ? null : cityLanguage}
			// 		type={item.type}
			// 	>
			// 		{ city }
			// 	</Highlight>
			// );
		});


	return (
		<>
			<DT><FormattedMessage id="details.bitterness" /></DT>
			<DD value="18">18</DD>
		</>
	);
};

export default Bitterness;
