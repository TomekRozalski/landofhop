import React, { useContext } from 'react';
import styled from 'styled-components';
import { get } from 'lodash';

import { BeverageDetailsContext } from 'config';
import { constants } from 'utils';
import { colors } from 'utils/theme';
import { Added, Updated } from './fragments';

const Wrapper = styled.div`
	grid-column: 3 / 5;
	border-top: 1px solid ${colors.gray[500]};
`;

const Other = () => {
	const { beverage } = useContext(BeverageDetailsContext);

	const cap = get(beverage, 'editorial.photos.cap', false);

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
			{ cap && <img alt="" src={`${constants.servers.images}${brand}/${badge}/${shortId}/cap/webp/1x.webp`} /> }
		</Wrapper>
	);
};

export default Other;
