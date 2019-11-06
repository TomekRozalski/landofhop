import { get } from 'lodash';

import { constants } from 'utils';
import removeEmptyValues from '../removeEmptyValues';

const dryHopped = (beverage) => {
	const getValue = (section) => {
		const isDryHopped = get(beverage, `${section}.brewing.isDryHopped`);
		const hops = get(beverage, `${section}.brewing.dryHopped.hops`);

		return hops || isDryHopped;
	};

	const { type } = constants.details;

	const values = [
		{ type: type.label, value: getValue('label') },
		{ type: type.producer, value: getValue('producer') },
		{ type: type.editorial, value: getValue('editorial') },
	];

	return removeEmptyValues({
		values,
		type: 'array || boolean',
	});
};

export default dryHopped;
