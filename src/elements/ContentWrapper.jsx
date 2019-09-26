import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { NavigationContext } from 'config';
import {
	colors,
	indexes,
	sizes,
	timingFunctions,
} from 'utils/theme';

const Main = styled.main`
	min-height: 100vh;
	padding-top: ${({ withNavbar }) => (withNavbar ? (sizes.topbar.height + sizes.navbar.height) : sizes.topbar.height)}px;
	padding-bottom: ${sizes.container.border.width}px;
	transition: padding-top ${timingFunctions.spring};
	background-color: ${colors.gray[700]};
	position: relative;
	z-index: ${indexes.main};

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

const ContentWrapper = ({ children }) => {
	const { navbar } = useContext(NavigationContext);

	return (
		<Main withNavbar={navbar}>{children}</Main>
	);
};

ContentWrapper.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ContentWrapper;
