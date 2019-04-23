import { constants } from 'dashboard/utils';

const onSubmit = ({
	moveBack,
	moveOn,
	saveFormValues,
}) => (values) => {
	saveFormValues({
		formName: constants.forms.beverage.producer,
		values,
	});

	// const scroll = document.querySelector('[data-testid="scroll"]'); // @ToDo: do we have data-testid?
	// if (scroll) {
	// 	scroll.scrollTop = 0;
	// }

	if (values.submitDirection === 'forward') {
		moveOn();
	}

	if (values.submitDirection === 'backward') {
		moveBack();
	}
};

export default onSubmit;
