import {
	containerColorsList,
	containerMaterialsList,
	containerTypesList,
	containerUnitsList,
} from '../../utils';
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
	[fields.cooperation]: null,
	[fields.contract]: null,
	[fields.place]: null,
	[fields.tale]: [],
	[fields.barcode]: null,
	// -----------
	[fields.fermentation]: null,
	[fields.style]: [],
	[fields.extract]: null,
	[fields.alcohol]: null,
	[fields.filtration]: null,
	[fields.pasteurization]: null,
	[fields.aged]: [],
	[fields.dryHopped]: null,
	[fields.expirationDate]: null,
	// -----------
	[fields.ingredients]: [],
	[fields.ingredientsList]: null,
	[fields.smokedMalt]: null,
	// -----------
	[fields.bitterness]: null,
	[fields.sweetness]: null,
	[fields.fullness]: null,
	[fields.power]: null,
	[fields.hoppyness]: null,
	[fields.temperature]: null,
	// -----------
	[fields.container]: {
		color: containerColorsList()[0],
		material: containerMaterialsList()[0],
		unit: containerUnitsList()[0],
		type: containerTypesList()[0],
		capacityValue: 0,
		hasCapWireFlip: false,
	},
	[fields.price]: [],
};
