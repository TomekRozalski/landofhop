import React from 'react';
import styled from 'styled-components';

import { BrokenBottle } from 'elements/icons';
import { colors } from 'utils/theme';

const Wrapper = styled.em`
	display: flex;
	height: 100%;
	justify-content: center;
	align-items: center;

	svg {
		width: 120px;
		margin-top: 8rem;

		> * { fill: ${colors.gray[500]}; }
	}
`;

const NoImage = () => (
	<Wrapper>
		<BrokenBottle />
	</Wrapper>
);

export default NoImage;
