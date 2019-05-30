import { LangValue as LangValueNormalizer } from 'dashboard/utils/normalizers/toRequest';
import { constants } from 'utils';

const normalizeData = ({
	code,
	name,
}) => ({
	code,
	name: name.map(LangValueNormalizer),
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
