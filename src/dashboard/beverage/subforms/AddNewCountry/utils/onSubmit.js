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
	notify,
	token,
}) => (
	values,
	{ setSubmitting },
) => {
	const data = normalizeData(values);
	setSubmitting(true);

	serverCall({
		type: constants.api_endpoints.country_save,
		body: JSON.stringify(data),
		token,
	})
		.then(res => res.json())
		.then(getCountriesList)
		.then(() => setSubmitting(false))
		.then(hide)
		.catch((error) => {
			notify({
				id: '--',
				type: 'danger',
				error,
			});
			setSubmitting(false);
		});
};

export default onSubmit;
