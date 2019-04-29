import { assign } from 'lodash';

import { constants } from 'utils';
import { constants as dashboardConstants } from 'dashboard/utils';
import {
	Label as LabelNormalizer,
	Producer as ProducerNormalizer,
	Editorial as EditorialNormalizer,
} from '../normalizers/toRequest';

const updateBeverage = ({
	getBeveragesList,
	push,
	savedForms,
	setAppError,
	token,
}) => ({
	setSubmitting,
	values,
}) => {
	setSubmitting(true);

	const { label, producer } = dashboardConstants.forms.beverage;

	const labelData = LabelNormalizer(savedForms[label]);
	const producerData = ProducerNormalizer(savedForms[producer]);
	const editorialData = EditorialNormalizer(values);

	const accumulator = assign(
		{},
		labelData,
		producerData,
		editorialData,
	);

	fetch(constants.servers.main + constants.api_endpoints.beverage_update, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(accumulator),
	})
		.then(res => res.json())
		.then(getBeveragesList)
		.then(() => setSubmitting(false))
		.then(() => {
			push('/');
		})
		.catch((err) => {
			setAppError(err);
			setSubmitting(false);
		});
};

export default updateBeverage;
