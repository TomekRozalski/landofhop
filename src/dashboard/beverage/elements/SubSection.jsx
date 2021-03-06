import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { colors, fonts } from 'utils/theme';

const Wrapper = styled.h3`
	grid-column: 1 / -1;
	margin-top: 2rem;
	font: 400 1.6rem / 1 ${fonts.primary};
	position: relative;

	&::after {
		display: block;
		height: 1px;
		width: 100%;
		content: '';
		background: ${colors.gray[400]};
		position: absolute;
		top: 50%;
		z-index: -1;
	}

	span {
		margin-left: 4rem;
		padding: 0 2rem;
		background: ${colors.gray[700]};
	}
`;

const SubSection = ({ title }) => (
	<Wrapper><FormattedMessage id={title} /></Wrapper>
);

SubSection.propTypes = {
	title: string.isRequired,
};

export default SubSection;
