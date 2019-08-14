import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { fonts } from 'utils/theme';

const Wrapper = styled.h1`
	grid-column: 1 / -1;
	margin: 3rem 0;
	font: 500 3rem / 4rem ${fonts.primary};
	text-align: center;
`;

const MainHeader = ({ title }) => (
	<Wrapper>
		<FormattedMessage id={title} />
	</Wrapper>
);

MainHeader.propTypes = {
	title: PropTypes.string.isRequired,
};

export default MainHeader;
