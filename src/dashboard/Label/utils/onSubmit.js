import { constants } from 'dashboard/utils';

const onSubmit = ({
	moveOn,
	saveFormValues,
}) => (values) => {
	saveFormValues({
		formName: constants.forms.beverage.label,
		values,
	});

	const scroll = document.querySelector('[data-testid="scroll"]');

	if (scroll) {
		scroll.scrollTop = 0;
	}

	moveOn();
};

export default onSubmit;
