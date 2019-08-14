import * as Yup from 'yup';

import fields from './fields';

export default Yup.object().shape({
	[fields.code]: Yup
		.string()
		.matches(/^[a-z]{2}$/, 'danger')
		.required('danger'),
	[fields.name]: Yup
		.array()
		.of(
			Yup.object().shape({
				lang: Yup.object().shape({
					label: Yup.string().required('danger'),
					value: Yup.string().required('danger'),
				}),
				value: Yup.string()
					.min(3, 'danger')
					.required('danger'),
			}),
		)
		.required('danger')
		.min(1, 'danger'),
});
