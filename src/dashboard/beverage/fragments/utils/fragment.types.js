import { bool, func, string } from 'prop-types';

const fragment = {
	disabled: bool,
	fieldName: string.isRequired,
	formName: string.isRequired,
	inverse: bool,
	showSubform: func,
};

export default fragment;
