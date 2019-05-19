import React, { useContext } from 'react';
import styled from 'styled-components';
import { get } from 'lodash';

import { BeverageDetailsContext } from 'config';
import { colors } from 'utils/theme';
import {
	Bitterness,
	// Fullness,
	// Hoppyness,
	// Power,
	// Sweetness,
} from './fragments';

const Wrapper = styled.dl`
	grid-column: 3 / 4;
	border-top: 1px solid ${colors.gray[400]};
	margin: 0;
	padding: 1.5rem 0;
`;

const Provided = () => {
	const { beverage } = useContext(BeverageDetailsContext);

	const labelBitterness = get(beverage, 'label.impressions.bitterness');
	const producerBitterness = get(beverage, 'producer.impressions.bitterness');

	return (
		labelBitterness
		|| producerBitterness)
		? (
			<Wrapper>
				<Bitterness />
				{/* <Sweetness /> */}
				{/* <Fullness /> */}
				{/* <Power /> */}
				{/* <Hoppyness /> */}
			</Wrapper>
		) : null;
};

export default Provided;
