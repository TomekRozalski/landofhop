import { assign } from 'lodash';

import { constants } from 'dashboard/utils';
import {
	Label as LabelNormalizer,
	Producer as ProducerNormalizer,
	Editorial as EditorialNormalizer,
} from '../normalizers/toRequest';

const saveBeverage = ({
	getBeveragesList,
	push,
	savedForms,
	setAppError,
	token,
}) => ({
	setSubmitting,
	values,
}) => {
	const labelData = LabelNormalizer(savedForms[constants.forms.beverage.label]);
	const producerData = ProducerNormalizer(savedForms[constants.forms.beverage.producer]);
	const editorialData = EditorialNormalizer(values);

	const accumulator = assign(
		{},
		labelData,
		producerData,
		editorialData,
	);

	console.log('accumulator', accumulator);

	setSubmitting(true);

	// fetch(Server.MAIN + Endpoints.BEVERAGE_SAVE, {
	// 	method: 'POST',
	// 	headers: {
	// 		'Content-Type': 'application/json',
	// 		'Authorization': `Bearer ${token}`,
	// 	},
	// 	body: JSON.stringify(accumulator),
	// })
	// 	.then(res => res.json())
	// 	.then(getBeveragesList)
	// 	.then(() => setSubmitting(false))
	// 	.then(clearBeverageDashboard)
	// 	.then(() => {
	// 		const scroll = document.querySelector('[data-testid="scroll"]');
	// 		scroll && (scroll.scrollTop = 0);

	// 		push('/');
	// 	})
	// 	.catch((err) => {
	// 		setAppError(err);
	// 		setSubmitting(false);
	// 	});

	setSubmitting(false);
};

export default saveBeverage;
