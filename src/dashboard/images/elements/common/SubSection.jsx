import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { colors, fonts } from 'utils/theme';

const Wrapper = styled.h3`
	margin: 2rem 0;
	font: 400 1.6rem / 1 ${fonts.primary};
	text-align: center;
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
