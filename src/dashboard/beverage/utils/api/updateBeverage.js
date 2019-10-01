import { assign, get } from 'lodash';

import { constants, serverCall } from 'utils';
import { constants as dashboardConstants } from 'dashboard/beverage/utils';
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
	notify,
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

	return serverCall({
		type: constants.api_endpoints.beverage_update,
		body: JSON.stringify(accumulator),
		token,
	})
		.then(res => res.json())
		.then(getBeveragesList)
		.then(() => {
			getBeverageDetails({
				badge,
				brand,
				shortId,
			});

			setScrollPosition(accumulator.id);
		})
		.then(() => setSubmitting(false))
		.then(() => {
			push(`${constants.routes.updateBeverageImages}/${shortId}/${brand}/${badge}`);
		})
		.catch((error) => {
			notify({
				id: '--',
				type: 'danger',
				error,
			});
			setSubmitting(false);
		});
};

export default updateBeverage;
