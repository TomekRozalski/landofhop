import { get } from 'lodash';

import { constants } from 'utils';
import removeEmptyValues from '../removeEmptyValues';

const city = (beverage) => {
	const labelValue = get(beverage, 'label.general.place.city');
	const producerValue = get(beverage, 'producer.general.place.city');
	const editorialValue = get(beverage, 'editorial.general.place.city');

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

export default city;
