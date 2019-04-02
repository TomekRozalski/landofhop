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
	[fields.isCooperation]: false,
	[fields.cooperation]: [],
	[fields.isContract]: false,
	[fields.contract]: {
		label: '',
		value: '',
	},
	[fields.isPlace]: false,
	[fields.place]: {
		label: '',
		value: '',
	},
	[fields.tale]: [],
	[fields.isBarcode]: false,
	[fields.barcode]: '',
	// -----------
	[fields.isFermentation]: false,
	[fields.fermentation]: [constants.fermentations.top],
	[fields.style]: [],
	[fields.isExtract]: false,
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
	[fields.isAlcohol]: false,
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
	[fields.isFiltration]: false,
	[fields.filtration]: false,
	[fields.isPasteurization]: false,
	[fields.pasteurization]: false,
	[fields.isRefermentation]: false,
	[fields.refermentation]: false,
	[fields.isAged]: false,
	[fields.aged]: [],
	[fields.isDryHopped]: false,
	[fields.dryHopped]: false,
	[fields.isExpirationDate]: false,
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
	[fields.isBitterness]: false,
	[fields.bitterness]: 0,
	[fields.isSweetness]: false,
	[fields.sweetness]: 0,
	[fields.isFullness]: false,
	[fields.fullness]: 0,
	[fields.isPower]: false,
	[fields.power]: 0,
	[fields.isHoppyness]: false,
	[fields.hoppyness]: 0,
	[fields.isTemperature]: false,
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
