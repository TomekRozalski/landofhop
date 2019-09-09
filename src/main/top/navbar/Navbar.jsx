import React, { useContext } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import { AuthenticationContext, NavigationContext } from 'config';
import { colors, indexes } from 'utils/theme';
import { Authorization, LanguageMenu, Menu } from './fragments';
import Loginbar from './loginbar/Loginbar';

const Wrapper = styled(animated.nav)`
	display: block;
	width: 50%;
	height: 100vh;
	padding-top: 20rem;
	position: fixed;
	top: 0;
	background: ${colors.gray[100]};
	z-index: ${indexes.navbar};
`;

const Navbar = () => {
	const { isLoggedIn } = useContext(AuthenticationContext);
	const { navbar } = useContext(NavigationContext);

	const position = useSpring({
		right: navbar ? '0' : '-50%',
	});

	return (
		<Wrapper style={position}>
			<LanguageMenu />
			<Menu />
			<Authorization />
			{!isLoggedIn && <Loginbar />}
		</Wrapper>
	);
};

export default Navbar;
