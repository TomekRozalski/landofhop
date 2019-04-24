import { constants } from 'dashboard/utils';
import { scrollContentTop } from 'elements/ContentWrapper';

const onSubmit = ({
	moveBack,
	moveOn,
	saveFormValues,
}) => (values) => {
	saveFormValues({
		formName: constants.forms.beverage.editorial,
		values,
	});

	if (values.submitDirection === 'forward') {
		moveOn();
	}

	if (values.submitDirection === 'backward') {
		moveBack();
	}

	scrollContentTop();
};

export default onSubmit;
