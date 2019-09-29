import * as Yup from 'yup';

export default Yup.object().shape({
	email: Yup
		.string()
		.email('danger')
		.required('danger'),
	password: Yup
		.string()
		.min(5, 'danger')
		.required('danger'),
});
