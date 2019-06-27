import React, { useContext } from 'react';
import { isDate } from 'lodash';

import { AuthenticationContext } from 'config';
import { LogIn, LogOut } from './index';

const Authorization = () => {
	const { token, tokenExpiration } = useContext(AuthenticationContext);
	return token && isDate(tokenExpiration) ? <LogOut /> : <LogIn />;
};

export default Authorization;
