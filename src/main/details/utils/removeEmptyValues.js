import { isBoolean } from 'lodash';

const removeEmptyValues = ({ type, values }) => (
	values.filter(({ value }) => {
		switch (type) {
		case 'boolean':
			return isBoolean(value);
		default:
			return null;
		}
	})
);

export default removeEmptyValues;
