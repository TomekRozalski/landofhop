import { get } from 'lodash';

import { constants } from 'utils';
import removeEmptyValues from '../removeEmptyValues';

const dryHopped = (beverage) => {
	const labelValue = get(beverage, 'label.brewing.dryHopped');
	const producerValue = get(beverage, 'producer.brewing.dryHopped');
	const editorialValue = get(beverage, 'editorial.brewing.dryHopped');

	const { type } = constants.details;

	const values = [
		{ type: type.label, value: labelValue },
		{ type: type.producer, value: producerValue },
		{ type: type.editorial, value: editorialValue },
	];

	return removeEmptyValues({
		values,
		type: 'array || boolean',
	});
};

export default dryHopped;
