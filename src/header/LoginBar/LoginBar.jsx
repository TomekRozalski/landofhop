import React, { useContext, useState } from 'react';
import { Formik } from 'formik';

import { AuthenticationContext, NavigationContext } from 'config';
import { Wrapper } from './elements';
import { FormBody, validationSchema } from './index';

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
