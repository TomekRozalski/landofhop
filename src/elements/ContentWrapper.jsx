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
	height: 100vh;
	overflow: hidden;
	border: ${sizes.container.border.width}px solid ${colors.gray[100]};
	border-top: 0;
	padding-top: ${({ withNavbar }) => (withNavbar ? (sizes.topbar.height + sizes.navbar.height) : sizes.topbar.height)}px;
	padding-bottom: ${sizes.container.border.width}px;
	transition: padding-top ${timingFunctions.spring};
	background-color: ${colors.gray[700]};
	position: relative;
	z-index: ${indexes.main};
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
