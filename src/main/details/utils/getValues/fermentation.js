import { get } from 'lodash';

import { constants } from 'utils';
import removeEmptyValues from '../removeEmptyValues';

const fermentation = (beverage) => {
	const labelValue = get(beverage, 'label.brewing.fermentation');
	const producerValue = get(beverage, 'producer.brewing.fermentation');
	const editorialValue = get(beverage, 'editorial.brewing.fermentation');

	const { type } = constants.details;

	const values = [
		{ type: type.label, value: labelValue },
		{ type: type.producer, value: producerValue },
		{ type: type.editorial, value: editorialValue },
	];

	return removeEmptyValues({
		values,
		type: 'array',
	});
};

export default fermentation;
