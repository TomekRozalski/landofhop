import { constants } from 'dashboard/utils';
import { scrollContentTop } from 'elements/ContentWrapper';

const onSubmit = ({
	moveOn,
	saveFormValues,
}) => (values) => {
	saveFormValues({
		formName: constants.forms.beverage.label,
		values,
	});

	moveOn();
	scrollContentTop();
};

export default onSubmit;
