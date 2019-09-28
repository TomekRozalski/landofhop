import React, { useContext } from 'react';
import styled from 'styled-components';

import { AuthenticationContext, NavigationContext } from 'config';
import { colors } from 'utils/theme';

const ButtonWrapper = styled.ul`
	display: flex;
	padding: 5px 0;
	margin: 0 20px;
`;

const Button = styled.button`
	display: flex;
	align-items: center;
	padding: 10px;
	text-decoration: none;
	color: ${colors.gray[100]};
	background-color: ${colors.gray[700]};
	transition: color .2s, background-color .2s;
	cursor: pointer;

	&:hover {
		color: ${colors.gray[700]};
		background-color: ${colors.gray[100]};
	}

	&:focus {
		outline: none;
	}
`;

const Authorization = () => {
	const { isLoggedIn, logOut } = useContext(AuthenticationContext);
	const { toggleLoginbar } = useContext(NavigationContext);

	return (
		<ButtonWrapper>
			{ isLoggedIn
				? <Button onClick={logOut}>Wyloguj</Button>
				: <Button onClick={toggleLoginbar}>Zaloguj</Button>}
		</ButtonWrapper>
	);
};

export default Authorization;
