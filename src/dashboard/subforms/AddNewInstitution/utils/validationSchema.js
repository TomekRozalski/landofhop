import * as Yup from 'yup';

import fields from './fields';

export default Yup.object().shape({
	[fields.BADGE]: Yup
		.string()
		.matches(/^[a-z\d-]+$/, 'danger')
		.required('danger'),
	[fields.NAME]: Yup.array()
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

	// [fields.WEBSITE]: Yup.string()
	// 	.when([fields.ISWEBSITE], {
	// 		is: true,
	// 		then: Yup.string().url('danger').required('danger'),
	// 	}),

	// [fields.CONSORTIUM]: Yup.object()
	// 	.when([fields.ISCONSORTIUM], {
	// 		is: true,
	// 		then: Yup.object().shape({
	// 			label: Yup.string().required('danger'),
	// 			value: Yup.string().required('danger'),
	// 		}),
	// 	}),
});
