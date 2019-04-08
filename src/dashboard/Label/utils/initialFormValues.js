import { constants } from 'utils';

import {
	alcoholRelatesList,
	alcoholScopesList,
	alcoholUnitsList,
	expirationDateUnitsList,
	extractUnitsList,
	extractRelatesList,
} from 'dashboard/utils';
import fields from './fields';

export default {
	[fields.badge]: '',
	// -----------
	[fields.name]: [{
		value: '',
		lang: '',
	}],
	[fields.series]: [],
	[fields.brand]: '',
	[fields.cooperation]: [],
	[fields.contract]: '',
	[fields.place]: '',
	[fields.tale]: [],
	[fields.barcode]: '',
	// -----------
	[fields.fermentation]: [constants.fermentations.top],
	[fields.style]: [],
	[fields.extract]: {
		relate: extractRelatesList()[0],
		unit: extractUnitsList()[0],
		value: 0,
	},
	[fields.alcohol]: {
		relate: alcoholRelatesList()[0],
		scope: alcoholScopesList()[0],
		unit: alcoholUnitsList()[0],
		value: 0,
	},
	[fields.filtration]: false,
	[fields.pasteurization]: false,
	[fields.refermentation]: false,
	[fields.aged]: [],
	[fields.dryHopped]: false,
	[fields.expirationDate]: {
		value: 0,
		unit: expirationDateUnitsList()[0],
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
