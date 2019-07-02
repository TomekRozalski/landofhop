import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

export const HeaderContext = React.createContext({});

const Header = ({ children }) => {
	const [lastTopScroll, setLastTopScroll] = useState(0);
	const [currentTopScroll, setCurrentTopScroll] = useState(0);
	const [scrollDirection, setScrollDirection] = useState('bottom');
	const [isHeaderTall, setHeaderHeight] = useState(true);

	const getScrollTop = () => window.pageYOffset || document.documentElement.scrollTop;

	const onScroll = debounce(() => {
		setCurrentTopScroll(window.pageYOffset || document.documentElement.scrollTop);
	}, 400, { leading: true, maxWait: 1000 });

	useEffect(() => {
		window.addEventListener('scroll', onScroll);

		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	}, []);

	useEffect(() => {
		const windowHeight = window.innerHeight;
		const windowScroll = window.scrollY;
		const contentHeight = document.body.offsetHeight;

		if (contentHeight > windowHeight + windowScroll + 80) {
			setScrollDirection(currentTopScroll > lastTopScroll ? 'bottom' : 'top');
		}

		setLastTopScroll(getScrollTop());
	}, [currentTopScroll]);

	useEffect(() => {
		setHeaderHeight(getScrollTop() < 200 || scrollDirection === 'top');
	}, [currentTopScroll, scrollDirection]);

	return (
		<HeaderContext.Provider value={{ isHeaderTall, setHeaderHeight }}>
			{ children }
		</HeaderContext.Provider>
	);
};

Header.propTypes = {
	children: PropTypes.node,
};

Header.defaultProps = {
	children: null,
};

export default Header;
