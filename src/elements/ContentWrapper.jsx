import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { NavigationContext } from 'config';
import Main from './Main';
import Scroll from './Scroll';

const ContentWrapper = ({ children }) => {
	const { loginbar, navbar } = useContext(NavigationContext);

	return (
		<Main isNavbar={navbar} isLoginbar={loginbar}>
			<Scroll>
				{children}
			</Scroll>
		</Main>
	);
};

ContentWrapper.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ContentWrapper;
