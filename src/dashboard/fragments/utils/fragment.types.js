import { func, string } from 'prop-types';

const fragment = {
	fieldName: string.isRequired,
	formName: string.isRequired,
	showSubform: func.isRequired,
};

export default fragment;
