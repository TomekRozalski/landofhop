import { get } from 'lodash';

const isSelectEmpty = (touched, errors, fieldName) => (
	touched[fieldName] && (
		get(errors[fieldName], 'label', false)
		|| get(errors[fieldName], 'value', false)
	)
);

export default isSelectEmpty;
