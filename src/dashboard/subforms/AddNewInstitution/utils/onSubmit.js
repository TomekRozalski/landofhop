import { get } from 'lodash';

import { LangValue as LangValueNormalizer } from 'dashboard/utils/normalizers/toRequest';
import { constants } from 'utils';

const normalizeData = ({
	badge,
	consortium,
	name,
	website,
}) => {
	const data = {
		badge,
		name: name.map(LangValueNormalizer),
	};

	if (consortium !== null) {
		data.consortium = get(consortium, 'value');
	}

	if (website !== null) {
		data.website = website.replace(/^https?:\/\//, '');
	}

	return data;
};

const onSubmit = ({
	getInstitutionsList,
	hide,
	setAppError,
	token,
}) => (
	values,
	{ setSubmitting },
) => {
	const data = normalizeData(values);
	setSubmitting(true);

	fetch(constants.servers.main + constants.api_endpoints.institution_save, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(data),
	})
		.then(res => res.json())
		.then(getInstitutionsList)
		.then(() => setSubmitting(false))
		.then(hide)
		.catch((err) => {
			setAppError(err.message);
			setSubmitting(false);
		});
};

export default onSubmit;
