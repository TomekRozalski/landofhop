import * as Yup from 'yup';
import moment from 'moment';

import { constants } from 'utils';
import fields from './fields';

const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

export default Yup.object().shape({
	[fields.series]: Yup
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
	[fields.tale]: Yup
		.array()
		.of(
			Yup.object().shape({
				lang: Yup.object().shape({
					label: Yup.string().required('danger'),
					value: Yup.string().required('danger'),
				}),
				value: Yup.string()
					.min(12, 'danger')
					.required('danger'),
			}),
		),
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
	[fields.extract]: Yup
		.object()
		.shape({
			value: Yup.number()
				.min(0, 'danger')
				.max(100, 'danger')
				.required('danger'),
			unit: Yup.object().shape({
				label: Yup.string().required('danger'),
				value: Yup.string().required('danger'),
			}),
			relate: Yup.object().shape({
				label: Yup.string().required('danger'),
				value: Yup.string().required('danger'),
			}),
		})
		.nullable(true),
	[fields.alcohol]: Yup
		.object()
		.shape({
			value: Yup.number()
				.min(0, 'danger')
				.max(100, 'danger')
				.required('danger'),
			unit: Yup.object().shape({
				label: Yup.string().required('danger'),
				value: Yup.string().required('danger'),
			}),
			relate: Yup.object().shape({
				label: Yup.string().required('danger'),
				value: Yup.string().required('danger'),
			}),
			scope: Yup.object().shape({
				label: Yup.string().required('danger'),
				value: Yup.string().required('danger'),
			}),
		})
		.nullable(true),
	[fields.expirationDate]: Yup
		.object()
		.shape({
			value: Yup.number()
				.min(1, 'danger')
				.max(500, 'danger')
				.required('danger'),
			unit: Yup.object().shape({
				label: Yup.string().required('danger'),
				value: Yup.string().required('danger'),
			}),
		})
		.nullable(true),
	// -----------
	[fields.ingredients]: Yup
		.array()
		.of(
			Yup.object().shape({
				lang: Yup.object().shape({
					label: Yup.string().required('danger'),
					value: Yup.string().required('danger'),
				}),
				value: Yup.string()
					.min(12, 'danger')
					.required('danger'),
			}),
		),
	[fields.ingredientsList]: Yup
		.array()
		.min(1, 'danger')
		.nullable(true),
	// -----------
	[fields.bitterness]: Yup
		.number()
		.min(0, 'danger')
		.max(100, 'danger')
		.nullable(true),
	[fields.sweetness]: Yup
		.number()
		.min(0, 'danger')
		.max(100, 'danger')
		.nullable(true),
	[fields.fullness]: Yup
		.number()
		.min(0, 'danger')
		.max(100, 'danger')
		.nullable(true),
	[fields.power]: Yup
		.number()
		.min(0, 'danger')
		.max(100, 'danger')
		.nullable(true),
	[fields.hoppyness]: Yup
		.number()
		.min(0, 'danger')
		.max(100, 'danger')
		.nullable(true),
	[fields.temperature]: Yup
		.object()
		.shape({
			from: Yup.number()
				.min(0, 'danger')
				.max(Yup.ref('to'), 'danger')
				.required('danger'),
			to: Yup.number()
				.min(Yup.ref('from'), 'danger')
				.max(100, 'danger')
				.required('danger'),
			unit: Yup.object().shape({
				label: Yup.string().required('danger'),
				value: Yup.string().required('danger'),
			}),
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
					.test('isCorrectDate', 'danger', (value) => {
						const group = value
							.match(/^(\d\d).(\d\d).(\d\d\d\d), (\d\d):(\d\d):(\d\d)$/, 'g');

						if (!group) {
							return false;
						}

						const [day, month, year, hour, minute, second] = group.slice(1);
						const formattedDate = moment(`${year}-${month}-${day} ${hour}:${minute}:${second}`);

						if (formattedDate.format() === 'Invalid date') {
							return false;
						}

						return formattedDate.isAfter('2017-06-20')
							&& formattedDate.isBefore(tomorrow);
					}),
				value: Yup.number()
					.min(0, 'danger')
					.required('danger'),
			}),
		),
});
