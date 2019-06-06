import React, { useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import { useSpring } from 'react-spring';

import { NavigationContext } from 'config';
import { gutters } from 'utils/theme';
import Main from './Main';
import Scroll from './Scroll';

let scrollContentTop;

const ContentWrapper = ({ children }) => {
	const { loginbar, navbar } = useContext(NavigationContext);
	const scrollBlock = React.createRef();

	const scrollTop = () => {
		if (scrollBlock.current) {
			scrollBlock.current.scrollTop = 0;
		}
	};

	scrollContentTop = scrollTop;

	const calcMarginTop = useCallback(() => {
		const { headerHeight, loginbarHeight, navbarHeight } = gutters;

		if (navbar) {
			return loginbar
				? `${headerHeight.lg + navbarHeight.lg + loginbarHeight.lg}px`
				: `${headerHeight.lg + navbarHeight.lg}px`;
		}

		return `${headerHeight.lg}px`;
	});

	const calcHeight = useCallback(() => {
		const { headerHeight, loginbarHeight, navbarHeight } = gutters;

		if (navbar) {
			return loginbar
				? `${window.innerHeight - headerHeight.lg - navbarHeight.lg - loginbarHeight.lg}px`
				: `${window.innerHeight - headerHeight.lg - navbarHeight.lg}px`;
		}

		return `${window.innerHeight - headerHeight.lg}px`;
	});

	const move = useSpring({
		height: calcHeight(),
		marginTop: calcMarginTop(),
	});

	return (
		<Main style={move}>
			<Scroll ref={scrollBlock}>
				{children}
			</Scroll>
		</Main>
	);
};

export { scrollContentTop };

ContentWrapper.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ContentWrapper;
