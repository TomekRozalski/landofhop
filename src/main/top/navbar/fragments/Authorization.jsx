import React, { useContext } from 'react';

import { AuthenticationContext } from 'config';
import { LogIn, LogOut } from './index';

const Authorization = () => {
	const { isLoggedIn } = useContext(AuthenticationContext);
	return isLoggedIn ? <LogOut /> : <LogIn />;
};

export default Authorization;
