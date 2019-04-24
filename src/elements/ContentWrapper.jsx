import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { NavigationContext } from 'config';
import Main from './Main';
import Scroll from './Scroll';

// eslint-disable-next-line import/no-mutable-exports
let scrollContentTop;

const ContentWrapper = ({ children }) => {
	const { loginbar, navbar } = useContext(NavigationContext);
	const scrollBlock = React.createRef();

	const scrollTop = () => {
		scrollBlock.current.scrollTop = 0;
	};

	scrollContentTop = scrollTop;

	return (
		<Main isNavbar={navbar} isLoginbar={loginbar}>
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
