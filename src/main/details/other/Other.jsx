import React, { useContext } from 'react';
import styled from 'styled-components';
import { get } from 'lodash';

import { BeverageDetailsContext } from 'config';
import { colors } from 'utils/theme';
import { Added, Updated } from './fragments';

const Wrapper = styled.div`
	grid-column: 3 / 5;
	border-top: 1px solid ${colors.gray[500]};
`;

const Other = () => {
	const { beverage } = useContext(BeverageDetailsContext);

	const cap = get(beverage, 'editorial.cap', false);

	const {
		badge,
		label: {
			general: {
				brand: {
					badge: brand,
				},
			},
		},
		shortId,
	} = beverage;

	return (
		<Wrapper>
			<dl>
				<Added />
				<Updated />
			</dl>
			{ cap && <img alt="" src={`/img/${brand}/${badge}/${shortId}/cap/x1.jpg`} /> }
		</Wrapper>
	);
};

export default Other;
