import { constants } from '../../utils';

const onSubmit = ({
	moveBack,
	moveOn,
	saveFormValues,
}) => (values) => {
	saveFormValues({
		formName: constants.forms.beverage.producer,
		values,
	});

	if (values.submitDirection === 'forward') {
		moveOn();
	}

	if (values.submitDirection === 'backward') {
		moveBack();
	}

	// scrollContentTop();
};

export default onSubmit;
