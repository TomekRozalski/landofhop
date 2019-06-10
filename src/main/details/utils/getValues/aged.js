import { get } from 'lodash';

import { constants } from 'utils';
import removeEmptyValues from '../removeEmptyValues';

const aged = (beverage) => {
	const labelValue = get(beverage, 'label.brewing.aged');
	const producerValue = get(beverage, 'producer.brewing.aged');
	const editorialValue = get(beverage, 'editorial.brewing.aged');

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

export default aged;
