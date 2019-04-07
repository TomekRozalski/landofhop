import { get } from 'lodash';

import { constants } from 'utils';

const normalizeData = ({
	code,
	name,
}) => ({
	code,
	name: name.map(({ lang, value }) => {
		const output = { value };

		if (get(lang, 'value') !== constants.dataLanguages.none) {
			output.language = get(lang, 'value');
		}

		return output;
	}),
});

const onSubmit = ({
	getCountriesList,
	hide,
	setAppError,
	token,
}) => (
	values,
	{ setSubmitting },
) => {
	const data = normalizeData(values);
	setSubmitting(true);

	fetch(constants.servers.main + constants.api_endpoints.country_save, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(data),
	})
		.then(res => res.json())
		.then(getCountriesList)
		.then(() => setSubmitting(false))
		.then(hide)
		.catch((err) => {
			setAppError(err);
			setSubmitting(false);
		});
};

export default onSubmit;
