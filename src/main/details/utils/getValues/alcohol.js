import { get } from 'lodash';

import { constants } from 'utils';
import removeEmptyValues from '../removeEmptyValues';

const alcohol = (beverage) => {
	const labelValue = get(beverage, 'label.brewing.alcohol');
	const producerValue = get(beverage, 'producer.brewing.alcohol');
	const editorialValue = get(beverage, 'editorial.brewing.alcohol');

	const { type } = constants.details;

	const values = [
		{ type: type.label, value: labelValue },
		{ type: type.producer, value: producerValue },
		{ type: type.editorial, value: editorialValue },
	];

	return removeEmptyValues({
		values,
		type: 'object',
	});
};

export default alcohol;
