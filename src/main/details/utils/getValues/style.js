import { get } from 'lodash';

import { constants } from 'utils';
import removeEmptyValues from '../removeEmptyValues';

const style = (beverage) => {
	const labelValue = get(beverage, 'label.brewing.style');
	const producerValue = get(beverage, 'producer.brewing.style');
	const editorialValue = get(beverage, 'editorial.brewing.style');

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

export default style;
