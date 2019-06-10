import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

export const NavigationContext = React.createContext({});

const Navigation = ({ children }) => {
	const [isHeaderTall, setHeaderHeight] = useState(true);
	const [loginbar, setLoginbar] = useState(false);
	const [navbar, setNavbar] = useState(false);

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
		<NavigationContext.Provider
			value={{
				isHeaderTall,
				loginbar,
				navbar,
				setHeaderHeight,
				setLoginbar,
				setNavbar,
				toggleLoginbar: () => setLoginbar(!loginbar),
				toggleNavbar: () => setNavbar(!navbar),
			}}
		>
			{ children }
		</NavigationContext.Provider>
	);
};

Navigation.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Navigation;
