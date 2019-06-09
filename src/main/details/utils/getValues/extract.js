import { get } from 'lodash';

import { constants } from 'utils';
import removeEmptyValues from '../removeEmptyValues';

const extract = (beverage) => {
	const labelValue = get(beverage, 'label.brewing.extract');
	const producerValue = get(beverage, 'producer.brewing.extract');

	const { type } = constants.details;

	const values = [
		{ type: type.label, value: labelValue },
		{ type: type.producer, value: producerValue },
	];

	return removeEmptyValues({
		values,
		type: 'object',
	});
};

export default extract;
