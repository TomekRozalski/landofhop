import { get } from 'lodash';

import { constants } from 'utils';
import removeEmptyValues from '../removeEmptyValues';

const country = (beverage) => {
	const labelValue = get(beverage, 'label.general.place.country.name');
	const producerValue = get(beverage, 'producer.general.place.country.name');
	const editorialValue = get(beverage, 'editorial.general.place.country.name');

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

export default country;
