import { constants } from 'utils';
import fields from './fields';

export default {
	[fields.badge]: '',
	// -----------
	[fields.name]: [{
		value: '',
		lang: {
			label: '',
			value: '',
		},
	}],
	[fields.series]: [],
	[fields.brand]: {
		label: '',
		value: '',
	},
	[fields.cooperation]: [],
	[fields.contract]: {
		label: '',
		value: '',
	},
	[fields.place]: {
		label: '',
		value: '',
	},
	[fields.tale]: [],
	[fields.barcode]: '',
	// -----------
	[fields.fermentation]: [constants.fermentations.top],
	[fields.style]: [],
	[fields.extract]: {
		relate: {
			label: '',
			value: '',
		},
		unit: {
			label: '',
			value: '',
		},
		value: 0,
	},
	[fields.alcohol]: {
		relate: {
			label: '',
			value: '',
		},
		scope: {
			label: '',
			value: '',
		},
		unit: {
			label: '',
			value: '',
		},
		value: 0,
	},
	[fields.filtration]: false,
	[fields.pasteurization]: false,
	[fields.refermentation]: false,
	[fields.aged]: [],
	[fields.dryHopped]: false,
	[fields.expirationDate]: {
		value: 0,
		unit: {
			label: '',
			value: '',
		},
	},
	// -----------
	[fields.ingredients]: [],
	[fields.ingredientsList]: [],
	[fields.areIngredientsComplete]: true,
	[fields.isSmokedMalt]: false,
	[fields.smokedMalt]: false,
	// -----------
	[fields.bitterness]: 0,
	[fields.sweetness]: 0,
	[fields.fullness]: 0,
	[fields.power]: 0,
	[fields.hoppyness]: 0,
	[fields.temperature]: {
		from: 0,
		to: 0,
		unit: {
			label: '',
			value: '',
		},
	},
	// -----------
	[fields.container]: {
		color: {
			label: '',
			value: '',
		},
		material: {
			label: '',
			value: '',
		},
		unit: {
			label: '',
			value: '',
		},
		type: {
			label: '',
			value: '',
		},
		capacityValue: 0,
		hasCapWireFlip: false,
	},
	[fields.price]: [],
};