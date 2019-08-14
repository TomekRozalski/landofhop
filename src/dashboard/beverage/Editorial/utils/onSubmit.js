import { constants } from '../../utils';

const onSubmit = ({
	finalSubmit,
	moveBack,
	saveFormValues,
}) => (values, { setSubmitting }) => {
	saveFormValues({
		formName: constants.forms.beverage.editorial,
		values,
	});

	if (values.submitDirection === 'forward') {
		finalSubmit({ setSubmitting, values });
		// .then(scrollContentTop);
	}

	if (values.submitDirection === 'backward') {
		moveBack();
		// scrollContentTop();
	}
};

export default onSubmit;
