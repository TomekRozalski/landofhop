import React, { useContext } from 'react';
import { Formik } from 'formik';

import { AuthenticationContext } from 'config';
import { initialFormValues, onSubmit, validationSchema } from './utils';
import FormBody from './FormBody';

const Loginbar = () => {
	const { logIn } = useContext(AuthenticationContext);

	return (
		<Formik
			initialValues={initialFormValues}
			onSubmit={onSubmit(logIn)}
			validationSchema={validationSchema}
			render={FormBody}
		/>
	);
};

export default Loginbar;
