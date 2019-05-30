import { get } from 'lodash';

import { LangValue as LangValueNormalizer } from 'dashboard/utils/normalizers/toRequest';
import { constants } from 'utils';

const normalizeData = ({
	badge,
	name,
	type,
}) => ({
	badge,
	name: name.map(LangValueNormalizer),
	type: get(type, 'value'),
});

const onSubmit = ({
	getIngredientsList,
	hide,
	setAppError,
	token,
}) => (
	values,
	{ setSubmitting },
) => {
	const data = normalizeData(values);
	setSubmitting(true);

	fetch(constants.servers.main + constants.api_endpoints.ingredient_save, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(data),
	})
		.then(res => res.json())
		.then(getIngredientsList)
		.then(() => setSubmitting(false))
		.then(hide)
		.catch((err) => {
			setAppError(err);
			setSubmitting(false);
		});
};

export default onSubmit;
