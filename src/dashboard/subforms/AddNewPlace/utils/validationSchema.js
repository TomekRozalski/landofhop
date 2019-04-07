import * as Yup from 'yup';

import fields from './fields';

export default Yup.object().shape({
	[fields.city]: Yup
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
	[fields.country]: Yup
		.object()
		.shape({
			label: Yup.string().required('danger'),
			value: Yup.string().required('danger'),
		}),
	[fields.institution]: Yup
		.object()
		.shape({
			label: Yup.string().required('danger'),
			value: Yup.string().required('danger'),
		}),
	[fields.longitude]: Yup
		.number()
		.min(0, 'danger')
		.max(180, 'danger')
		.nullable(true),
	[fields.latitude]: Yup
		.number()
		.min(0, 'danger')
		.max(180, 'danger')
		.nullable(true),
});
