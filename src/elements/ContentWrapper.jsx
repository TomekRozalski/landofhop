import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors, indexes, sizes } from 'utils/theme';

const Main = styled.main`
	min-height: 100vh;
	border: 3rem solid ${colors.gray[100]};
	border-top: 0;
	padding: calc(${sizes.header.height.tall.lg} + 0px) 0 3rem 0;
	background-color: ${colors.gray[700]};
	position: relative;
	z-index: ${indexes.main};
`;

const ContentWrapper = ({ children }) => (
	<Main>{children}</Main>
);

ContentWrapper.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ContentWrapper;
