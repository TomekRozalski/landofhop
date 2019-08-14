import { assign } from 'lodash';

import { constants } from 'utils';
import { constants as dashboardConstants } from 'dashboard/beverage/utils';
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
	setReadyToUnmount,
	token,
}) => ({
	setSubmitting,
	values,
}) => {
	setSubmitting(true);
	setReadyToUnmount(true);

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

	if (accumulator.brandBadge) {
		delete accumulator.brandBadge;
	}

	return fetch(constants.servers.data + constants.api_endpoints.beverage_save, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(accumulator),
	})
		.then(res => res.json())
		.then((res) => {
			getBeveragesList();
			setSubmitting(false);

			if (res.shortId) {
				push(`${constants.routes.updateBeverageImages}/${res.shortId}/${labelData.brandBadge}/${labelData.badge}`);
			} else {
				throw new Error('shortId is missing!');
			}
		})
		.catch((err) => {
			setAppError(err);
			setSubmitting(false);
		});
};

export default saveBeverage;
