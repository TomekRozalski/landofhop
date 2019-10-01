import { get } from 'lodash';

import { LangValue as LangValueNormalizer } from 'dashboard/beverage/utils/normalizers/toRequest';
import { constants, serverCall } from 'utils';

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
	notify,
	token,
}) => (
	values,
	{ setSubmitting },
) => {
	const data = normalizeData(values);
	setSubmitting(true);

	serverCall({
		type: constants.api_endpoints.ingredient_save,
		body: JSON.stringify(data),
		token,
	})
		.then(res => res.json())
		.then(getIngredientsList)
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
