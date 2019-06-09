import { get } from 'lodash';

import { constants } from 'utils';
import removeEmptyValues from '../removeEmptyValues';

const pasteurization = (beverage) => {
	const labelValue = get(beverage, 'label.brewing.pasteurization');
	const producerValue = get(beverage, 'producer.brewing.pasteurization');
	const editorialValue = get(beverage, 'editorial.brewing.pasteurization');

	const { type } = constants.details;

	const values = [
		{ type: type.label, value: labelValue },
		{ type: type.producer, value: producerValue },
		{ type: type.editorial, value: editorialValue },
	];

	return removeEmptyValues({
		values,
		type: 'boolean',
	});
};

export default pasteurization;
