import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors, indexes, sizes } from 'utils/theme';

const Main = styled.main`
	min-height: 100vh;
	border: ${sizes.container.border.width}px solid ${colors.gray[100]};
	border-top: 0;
	padding: ${sizes.header.height}px 0 ${sizes.container.border.width}px 0;
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
