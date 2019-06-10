import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useSpring } from 'react-spring';

import { NavigationContext } from 'config';
import { sizes } from 'utils/theme';
import Main from './Main';

const ContentWrapper = ({ children }) => {
	const { isHeaderTall } = useContext(NavigationContext);

	const move = useSpring({
		paddingTop: isHeaderTall
			? sizes.header.height.tall.lg
			: sizes.header.height.short.lg,
	});

	return (
		<Main style={move}>
			{children}
		</Main>
	);
};

ContentWrapper.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ContentWrapper;
