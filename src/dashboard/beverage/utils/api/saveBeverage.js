import { assign } from 'lodash';

import { constants, serverCall } from 'utils';
import { constants as dashboardConstants } from 'dashboard/beverage/utils';
import {
	Label as LabelNormalizer,
	Producer as ProducerNormalizer,
	Editorial as EditorialNormalizer,
} from '../normalizers/toRequest';

const saveBeverage = ({
	getBeveragesList,
	notify,
	push,
	savedForms,
	setReadyToUnmount,
	setScrollPosition,
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

	return serverCall({
		type: constants.api_endpoints.beverage_save,
		body: JSON.stringify(accumulator),
		token,
	})
		.then(res => res.json())
		.then((res) => {
			getBeveragesList();
			// eslint-disable-next-line no-underscore-dangle
			setScrollPosition(res._id);

			setSubmitting(false);

			if (res.shortId) {
				push(`${constants.routes.updateBeverageImages}/${res.shortId}/${labelData.brandBadge}/${labelData.badge}`);
			} else {
				throw new Error('shortId is missing!');
			}
		})
		.catch((error) => {
			notify({
				id: '--',
				type: constants.notify.type.error,
				error,
			});
			setSubmitting(false);
		});
};

export default saveBeverage;
