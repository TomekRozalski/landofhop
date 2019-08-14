import { constants } from '../../utils';

const onSubmit = ({
	moveOn,
	saveFormValues,
}) => (values) => {
	saveFormValues({
		formName: constants.forms.beverage.label,
		values,
	});

	moveOn();
	// scrollContentTop();
};

export default onSubmit;
