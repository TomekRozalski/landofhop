import { assign, get } from 'lodash';

import { constants } from 'utils';
import { constants as dashboardConstants } from 'dashboard/utils';
import {
	Label as LabelNormalizer,
	Producer as ProducerNormalizer,
	Editorial as EditorialNormalizer,
} from '../normalizers/toRequest';

const updateBeverage = ({
	getBeverageDetails,
	getBeveragesList,
	push,
	savedForms,
	setAppError,
	setReadyToUnmount,
	token,
}) => ({
	setSubmitting,
	values,
}) => {
	setSubmitting(true);
	setReadyToUnmount(true);

	const { label, producer } = dashboardConstants.forms.beverage;
	const { shortId } = values;

	const labelData = LabelNormalizer(savedForms[label]);
	const producerData = ProducerNormalizer(savedForms[producer]);
	const editorialData = EditorialNormalizer(values);

	const accumulator = assign(
		{},
		labelData,
		producerData,
		editorialData,
	);

	const brand = get(savedForms, [label, 'brand', 'badge'], '');
	const badge = get(savedForms, [label, 'badge'], '');

	return fetch(constants.servers.main + constants.api_endpoints.beverage_update, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(accumulator),
	})
		.then(res => res.json())
		.then(getBeveragesList)
		.then(() => {
			getBeverageDetails({
				badge,
				brand,
				shortId,
			});
		})
		.then(() => setSubmitting(false))
		.then(() => {
			push(`${constants.routes.details}/${shortId}/${brand}/${badge}`);
		})
		.catch((err) => {
			setAppError(err);
			setSubmitting(false);
		});
};

export default updateBeverage;
