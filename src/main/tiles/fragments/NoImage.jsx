import React from 'react';
import PropTypes from 'prop-types';
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

const NoImage = ({ image }) => (
	image
		? null
		: (
			<Wrapper>
				<BrokenBottle />
			</Wrapper>
		)
);

NoImage.propTypes = {
	image: PropTypes.bool.isRequired,
};

export default NoImage;
