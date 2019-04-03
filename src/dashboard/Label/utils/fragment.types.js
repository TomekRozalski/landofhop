import { func, string } from 'prop-types';

const fragment = {
	formName: string.isRequired,
	showSubform: func.isRequired,
};

export default fragment;
