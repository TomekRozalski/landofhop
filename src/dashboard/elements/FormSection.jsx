import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { colors, fonts } from 'utils/theme';
import { Wrapper } from 'dashboard/elements';

const SectionHeader = styled.h2`
	grid-column: 1 / -1;
	margin-top: 1rem;
	border-top: 1px solid ${colors.gray[100]};
	padding-top: 2rem;
	font: 400 2.2rem / 1 ${fonts.primary};

	&:first-letter {
		text-transform: uppercase;
	}
`;

const SectionDescription = styled.p`
	grid-column: 3 / -1;
	margin: 0 0 2rem 0;
	text-align: right;
	color: ${colors.gray[300]};
`;

const FormSection = ({ children, description, title }) => (
	<Wrapper>
		<SectionHeader><FormattedMessage id={title} /></SectionHeader>
		<SectionDescription><FormattedMessage id={description} /></SectionDescription>
		{ children }
	</Wrapper>
);

FormSection.propTypes = {
	children: PropTypes.node.isRequired,
	description: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default FormSection;
