import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { colors, fonts } from 'utils/theme';

const Wrapper = styled.h3`
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
		background: ${colors.gray[700]};
		padding: 0 2rem;
	}

	${({ position }) => {
		if (position === 'cover') {
			return `
				grid-column: 1 / 2;
				grid-row-start: 4;
				text-align: center;
			`;
		}

		if (position === 'cap') {
			return `
				grid-column: 2 / 3;
				grid-row-start: 4;
				text-align: center;
			`;
		}

		return `
			grid-column: 1 / -1;

			span {
				margin-left: 4rem;
			}
		`;
	}};
`;

const SubSection = ({ position, title }) => (
	<Wrapper position={position}><FormattedMessage id={title} /></Wrapper>
);

SubSection.propTypes = {
	position: string,
	title: string.isRequired,
};

SubSection.defaultProps = {
	position: null,
};

export default SubSection;
