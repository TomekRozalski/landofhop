import * as Yup from 'yup';

import { constants } from 'utils';
import { isValidDate } from 'dashboard/beverage/utils';
import fields from './fields';

export default Yup.object().shape({
	[fields.cooperation]: Yup
		.array()
		.min(1, 'danger')
		.nullable(true),
	[fields.contract]: Yup
		.object()
		.shape({
			label: Yup.string().required('danger'),
			value: Yup.string().required('danger'),
		})
		.nullable(true),
	[fields.place]: Yup
		.object()
		.shape({
			label: Yup.string().required('danger'),
			value: Yup.string().required('danger'),
		})
		.nullable(true),
	// -----------
	[fields.fermentation]: Yup
		.array()
		.of(
			Yup.mixed().oneOf([
				constants.fermentations.top,
				constants.fermentations.bottom,
				constants.fermentations.spontaneous,
			]),
		)
		.nullable(true),
	[fields.style]: Yup
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
		),
	[fields.alcoholScope]: Yup
		.object()
		.shape({
			label: Yup.string().required('danger'),
			value: Yup.string().required('danger'),
		})
		.nullable(true),
	// -----------
	[fields.color]: Yup
		.string()
		.matches(/^#[0-9abcdef]{6}$/)
		.nullable(true),
	[fields.clarity]: Yup
		.object()
		.shape({
			label: Yup.string().required('danger'),
			value: Yup.string().required('danger'),
		})
		.nullable(true),
	// -----------
	[fields.price]: Yup.array()
		.of(
			Yup.object().shape({
				currency: Yup.object().shape({
					label: Yup.string().required('danger'),
					value: Yup.string().required('danger'),
				}),
				date: Yup
					.mixed()
					.test('isCorrectDate', 'danger', value => isValidDate(value)),
				value: Yup.number()
					.min(0, 'danger')
					.required('danger'),
			}),
		),
	[fields.added]: Yup
		.mixed()
		.test('isCorrectDate', 'danger', value => isValidDate(value, { nullable: true })),
	[fields.updated]: Yup
		.mixed()
		.test('isCorrectDate', 'danger', value => isValidDate(value, { nullable: true })),
	[fields.notes]: Yup
		.string()
		.min(3, 'danger')
		.nullable(true),
});
