import actionsName from '../../actionsName';

const saveFormValues = ({ formName, values }) => ({
	type: actionsName.SAVE_FORM_VALUES,
	payload: {
		formName,
		values,
	},
});

export default saveFormValues;
