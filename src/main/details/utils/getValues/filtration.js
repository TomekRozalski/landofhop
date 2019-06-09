import { get } from 'lodash';

import { constants } from 'utils';
import removeEmptyValues from '../removeEmptyValues';

const filtration = (beverage) => {
	const labelValue = get(beverage, 'label.brewing.filtration');
	const producerValue = get(beverage, 'producer.brewing.filtration');
	const editorialValue = get(beverage, 'editorial.brewing.filtration');

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

export default filtration;
