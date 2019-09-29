import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors, indexes, sizes } from 'utils/theme';

const Main = styled.main`
	height: calc(100vh - ${sizes.topbar.height + sizes.container.border.width}px);
	margin: ${sizes.container.border.width}px;
	margin-top: ${sizes.topbar.height}px;
	overflow-y: scroll;
	background-color: ${colors.gray[700]};
	z-index: ${indexes.main};
	position: inherit !important;

	&::before {
		display: block;
		width: 100%;
		height: 100vh;
		border: ${sizes.container.border.width}px solid ${colors.gray[100]};
		content: '';
		position: fixed;
		top: 0;
		left: 0;
		z-index: ${indexes.mainBorder};
		pointer-events: none;
	}
`;

const ContentWrapper = ({ children }) => (
	<Main>{children}</Main>
);

ContentWrapper.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ContentWrapper;
