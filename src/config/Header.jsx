import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

export const HeaderContext = React.createContext({});

const Header = ({ children }) => {
	const [isHeaderTall, setHeaderHeight] = useState(true);

	const checkScroll = () => {
		const distanceY = window.pageYOffset || document.documentElement.scrollTop;
		setHeaderHeight(distanceY < 200);
	};

	const onScroll = debounce(checkScroll, 400, { leading: true, maxWait: 1000 });

	useEffect(() => {
		window.addEventListener('scroll', onScroll);

		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	}, []);

	return (
		<HeaderContext.Provider value={{ isHeaderTall, setHeaderHeight }}>
			{ children }
		</HeaderContext.Provider>
	);
};

Header.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Header;
