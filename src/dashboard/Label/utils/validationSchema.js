import * as Yup from 'yup';

import { constants } from 'utils';
import fields from './fields';

const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

export default Yup.object().shape({
	[fields.badge]: Yup
		.string()
		.min(3, 'danger')
		.matches(/^[a-z\d-]+$/, 'danger')
		.required('danger'),
	// -----------
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
	[fields.brand]: Yup
		.object()
		.shape({
			label: Yup.string().required('danger'),
			value: Yup.string().required('danger'),
		})
		.required('danger'),
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
	[fields.barcode]: Yup
		.string()
		.transform(v => (v === null ? 'abdef' : v))
		.min(5, 'danger')
		.required('danger'),
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


	// [fields.isExtract]: Yup.boolean(),
	// [fields.extract]: Yup.object()
	// 	.when([fields.isExtract], {
	// 		is: true,
	// 		then: (
	// 			Yup.object().shape({
	// 				value: Yup.number()
	// 					.min(0, 'danger')
	// 					.max(100, 'danger')
	// 					.required('danger'),
	// 				unit: Yup.object().shape({
	// 					label: Yup.string().required('danger'),
	// 					value: Yup.string().required('danger'),
	// 				}),
	// 				relate: Yup.object().shape({
	// 					label: Yup.string().required('danger'),
	// 					value: Yup.string().required('danger'),
	// 				}),
	// 			})
	// 		),
	// 	}),
	// [fields.isAlcohol]: Yup.boolean(),
	// [fields.alcohol]: Yup.object()
	// 	.when([fields.isAlcohol], {
	// 		is: true,
	// 		then: (
	// 			Yup.object().shape({
	// 				value: Yup.number()
	// 					.min(0, 'danger')
	// 					.max(100, 'danger')
	// 					.required('danger'),
	// 				unit: Yup.object().shape({
	// 					label: Yup.string().required('danger'),
	// 					value: Yup.string().required('danger'),
	// 				}),
	// 				relate: Yup.object().shape({
	// 					label: Yup.string().required('danger'),
	// 					value: Yup.string().required('danger'),
	// 				}),
	// 				scope: Yup.object().shape({
	// 					label: Yup.string().required('danger'),
	// 					value: Yup.string().required('danger'),
	// 				}),
	// 			})
	// 		),
	// 	}),
	// [fields.isAged]: Yup.boolean(),
	// [fields.aged]: Yup.array()
	// 	.when([fields.isAged], {
	// 		is: true,
	// 		then: Yup.array().min(1, 'danger').required('danger'),
	// 	}),
	// [fields.isExpirationDate]: Yup.boolean(),
	// [fields.expirationDate]: Yup.object()
	// 	.when([fields.isExpirationDate], {
	// 		is: true,
	// 		then: (
	// 			Yup.object().shape({
	// 				value: Yup.number()
	// 					.min(0, 'danger')
	// 					.max(500, 'danger')
	// 					.required('danger'),
	// 				unit: Yup.object().shape({
	// 					label: Yup.string().required('danger'),
	// 					value: Yup.string().required('danger'),
	// 				}),
	// 			})
	// 		),
	// 	}),
	// // -----------
	// [fields.ingredients]: Yup.array()
	// 	.of(
	// 		Yup.object().shape({
	// 			lang: Yup.object().shape({
	// 				label: Yup.string().required('danger'),
	// 				value: Yup.string().required('danger'),
	// 			}),
	// 			value: Yup.string()
	// 				.min(12, 'danger')
	// 				.required('danger'),
	// 		}),
	// 	),
	// // -----------
	// [fields.isBitterness]: Yup.boolean(),
	// [fields.bitterness]: Yup.number()
	// 	.when([fields.isBitterness], {
	// 		is: true,
	// 		then: Yup.number().min(0, 'danger').max(100, 'danger').required('danger'),
	// 	}),
	// [fields.isSweetness]: Yup.boolean(),
	// [fields.sweetness]: Yup.number()
	// 	.when([fields.isSweetness], {
	// 		is: true,
	// 		then: Yup.number().min(0, 'danger').max(100, 'danger').required('danger'),
	// 	}),
	// [fields.isFullness]: Yup.boolean(),
	// [fields.fullness]: Yup.number()
	// 	.when([fields.isFullness], {
	// 		is: true,
	// 		then: Yup.number().min(0, 'danger').max(100, 'danger').required('danger'),
	// 	}),
	// [fields.isPower]: Yup.boolean(),
	// [fields.power]: Yup.number()
	// 	.when([fields.isPower], {
	// 		is: true,
	// 		then: Yup.number().min(0, 'danger').max(100, 'danger').required('danger'),
	// 	}),
	// [fields.isHoppyness]: Yup.boolean(),
	// [fields.hoppyness]: Yup.number()
	// 	.when([fields.isHoppyness], {
	// 		is: true,
	// 		then: Yup.number().min(0, 'danger').max(100, 'danger').required('danger'),
	// 	}),
	// [fields.isTemperature]: Yup.boolean(),
	// [fields.temperature]: Yup.object()
	// 	.when([fields.isTemperature], {
	// 		is: true,
	// 		then: (
	// 			Yup.object().shape({
	// 				from: Yup.number()
	// 					.min(0, 'danger')
	// 					.max(Yup.ref('to'), 'danger')
	// 					.required('danger'),
	// 				to: Yup.number()
	// 					.min(Yup.ref('from'), 'danger')
	// 					.max(100, 'danger')
	// 					.required('danger'),
	// 				unit: Yup.object().shape({
	// 					label: Yup.string().required('danger'),
	// 					value: Yup.string().required('danger'),
	// 				}),
	// 			})
	// 		),
	// 	}),
	// // -----------
	// [fields.container]: Yup.object().shape({
	// 	type: Yup.object().shape({
	// 		label: Yup.string().required('danger'),
	// 		value: Yup.string().required('danger'),
	// 	}),
	// 	color: Yup.object().shape({
	// 		label: Yup.string().required('danger'),
	// 		value: Yup.string().required('danger'),
	// 	}),
	// 	material: Yup.object().shape({
	// 		label: Yup.string().required('danger'),
	// 		value: Yup.string().required('danger'),
	// 	}),
	// 	capacityValue: Yup.number()
	// 		.min(1, 'danger')
	// 		.max(5000, 'danger')
	// 		.required('danger'),
	// 	unit: Yup.object().shape({
	// 		label: Yup.string().required('danger'),
	// 		value: Yup.string().required('danger'),
	// 	}),
	// 	hasCapWireFlip: Yup.boolean(),
	// }),
	// [fields.price]: Yup.array()
	// 	.of(
	// 		Yup.object().shape({
	// 			currency: Yup.object().shape({
	// 				label: Yup.string().required('danger'),
	// 				value: Yup.string().required('danger'),
	// 			}),
	// 			date: Yup
	// 				.date()
	// 				.min(new Date('2017/06/20'))
	// 				.max(tomorrow)
	// 				.required('danger'),
	// 			value: Yup.number()
	// 				.min(0, 'danger')
	// 				.required('danger'),
	// 		}),
	// 	),
});
