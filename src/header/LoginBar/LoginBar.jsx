import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';

import { AuthenticationContext } from 'config';
import {
	colors,
	indexes,
	mq,
	sizes,
} from 'utils/theme';
import { FormBody, validationSchema } from './index';

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	height: ${sizes.loginbar.height}px;
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
	top: ${sizes.navbar.height.xs}px;
	left: 0;
	z-index: ${indexes.loginbar};

	${mq.xl`
		top: ${sizes.navbar.height.xl}px;
	`}
`;

const LoginBar = () => {
	const [loginState, setLoginState] = useState(null);
	const { logIn } = useContext(AuthenticationContext);

	return (
		<Wrapper loginState={loginState}>
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
