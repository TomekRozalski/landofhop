import { bool, func, string } from 'prop-types';

const fragment = {
	fieldName: string.isRequired,
	formName: string.isRequired,
	inverse: bool,
	showSubform: func,
};

export default fragment;