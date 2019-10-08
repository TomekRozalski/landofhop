import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';

import { AuthenticationContext, NavigationContext } from 'config';
import {
	colors,
	indexes,
	mq,
	sizes,
	timingFunctions,
} from 'utils/theme';
import { FormBody, validationSchema } from './index';

const setTranslate = (isActive, isNavbar, breakpoint) => {
	if (!isNavbar) {
		return sizes.topbar.height[breakpoint] - sizes.loginbar.height[breakpoint];
	}

	return isActive
		? sizes.navbar.height[breakpoint]
		: sizes.navbar.height[breakpoint] - sizes.loginbar.height[breakpoint];
};

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	height: ${sizes.loginbar.height.xs}px;
	background-color: ${({ loginState }) => {
		if (loginState === false) {
			return colors.danger.light;
		}

		if (loginState === true) {
			return colors.success.light;
		}

		return colors.gray[500];
	}};
	position: fixed;
	top: 0;
	transform: translateY(${({ isActive, isNavbar }) => setTranslate(isActive, isNavbar, 'xs')}px);
	transition: transform ${timingFunctions.default};

	left: 0;
	z-index: ${indexes.loginbar};

	${mq.xl`
		height: ${sizes.loginbar.height.xl}px;
		transform: translateY(${({ isActive, isNavbar }) => setTranslate(isActive, isNavbar, 'xl')}px);
	`}
`;

const LoginBar = () => {
	const [loginState, setLoginState] = useState(null);
	const { logIn } = useContext(AuthenticationContext);
	const { loginbar, navbar } = useContext(NavigationContext);

	return (
		<Wrapper loginState={loginState} isActive={loginbar} isNavbar={navbar}>
			<Formik
				initialValues={{
					email: '',
					password: '',
				}}
				onSubmit={(values, { setSubmitting }) => {
					logIn(values).then((status) => {
						setLoginState(status === 200);
						setSubmitting(false);
					});
				}}
				validationSchema={validationSchema}
				render={FormBody}
			/>
		</Wrapper>
	);
};

export default LoginBar;
