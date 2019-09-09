import { get } from 'lodash';

import { constants, serverCall } from 'utils';
import { LangValue as LangValueNormalizer } from 'dashboard/beverage/utils/normalizers/toRequest';

const normalizeData = ({
	city,
	country,
	institution,
	latitude,
	longitude,
}) => {
	const data = {
		city: city.map(LangValueNormalizer),
		country: get(country, 'value'),
		institution: get(institution, 'value'),
	};

	if (latitude !== null && longitude !== null) {
		data.location = {
			latitude: latitude.toString(),
			longitude: longitude.toString(),
		};
	}

	return data;
};

const onSubmit = ({
	getPlacesList,
	hide,
	setAppError,
}) => (
	values,
	{ setSubmitting },
) => {
	const data = normalizeData(values);
	setSubmitting(true);

	serverCall({
		type: constants.api_endpoints.place_save,
		body: JSON.stringify(data),
	})
		.then(res => res.json())
		.then(getPlacesList)
		.then(() => setSubmitting(false))
		.then(hide)
		.catch((err) => {
			setAppError(err);
			setSubmitting(false);
		});
};

export default onSubmit;
