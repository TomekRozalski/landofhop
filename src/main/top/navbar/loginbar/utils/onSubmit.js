const onSubmit = logIn => (values, { setErrors, setSubmitting }) => {
	setSubmitting(true);

	logIn(values)
		.then(() => {
			setSubmitting(false);
		})
		.catch(() => {
			setErrors({
				email: 'emailAndPasswordDoNotMatch',
				password: 'emailAndPasswordDoNotMatch',
			});
			setSubmitting(false);
		});
};

export default onSubmit;
