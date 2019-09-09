import { LangValue as LangValueNormalizer } from 'dashboard/beverage/utils/normalizers/toRequest';
import { constants, serverCall } from 'utils';

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
}) => (
	values,
	{ setSubmitting },
) => {
	const data = normalizeData(values);
	setSubmitting(true);

	serverCall({
		type: constants.api_endpoints.country_save,
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
