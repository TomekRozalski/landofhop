import { isArray, isBoolean, isObject } from 'lodash';

const removeEmptyValues = ({ type, values }) => (
	values.filter(({ value }) => {
		switch (type) {
		case 'array':
			return isArray(value);
		case 'boolean':
			return isBoolean(value);
		case 'array || boolean':
			return isArray(value) || isBoolean(value);
		case 'object':
			return isObject(value);
		default:
			return null;
		}
	})
);

export default removeEmptyValues;
