import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
	colors,
	indexes,
	mq,
	sizes,
} from 'utils/theme';

const Main = styled.main`
	height: calc(100vh - ${sizes.topbar.height.xs + sizes.container.border.width.xs}px);
	margin: ${sizes.container.border.width.xs}px;
	margin-top: ${sizes.topbar.height.xs}px;
	overflow-y: scroll;
	background-color: ${colors.gray[700]};
	z-index: ${indexes.main};
	position: inherit !important;

	${mq.md`
		height: calc(100vh - ${sizes.topbar.height.md + sizes.container.border.width.md}px);
		margin: ${sizes.container.border.width.md}px;
		margin-top: ${sizes.topbar.height.md}px;
	`}

	${mq.xl`
		height: calc(100vh - ${sizes.topbar.height.xl + sizes.container.border.width.xl}px);
		margin: ${sizes.container.border.width.xl}px;
		margin-top: ${sizes.topbar.height.xl}px;
	`}

	&::before {
		display: block;
		width: 100%;
		height: 100vh;
		border: ${sizes.container.border.width.xs}px solid ${colors.gray[100]};
		content: '';
		position: fixed;
		top: 0;
		left: 0;
		pointer-events: none;
		z-index: ${indexes.mainBorder};

		${mq.md`
			border-width: ${sizes.container.border.width.md}px;
		`}

		${mq.xl`
			border-width: ${sizes.container.border.width.xl}px;
		`}
	}
`;

const ContentWrapper = ({ children }) => (
	<Main>{children}</Main>
);

ContentWrapper.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ContentWrapper;
