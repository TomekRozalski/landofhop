// import { get } from 'lodash';

// import { Endpoints, Languages, Server } from '../../../../utils/enums';
// import { InstitutionTypes } from '../utils/types';

// interface OutputName {
// 	language?: string
// 	value: string
// }

// const normalizeData = ({
// 	badge,
// 	consortium,
// 	isConsortium,
// 	isWebsite,
// 	name,
// 	website,
// }: InstitutionTypes) => {
// 	const data: {
// 		badge: string
// 		name: OutputName[]
// 		consortium?: string
// 		website?: string
// 	} = {
// 		badge,
// 		name: name.map(({ lang, value }) => {
// 			const output: OutputName = { value };
// 			if (get(lang, 'value') !== Languages.NONE) {
// 				output.language = get(lang, 'value')
// 			}

// 			return output;
// 		}),
// 	};

// 	if (isConsortium) {
// 		data.consortium = get(consortium, 'value');
// 	}

// 	if (isWebsite) {
// 		data.website = website.replace(/^https?:\/\//, '');
// 	}

// 	return data;
// }

// interface FirstProps {
// 	getInstitutionsList: () => void
// 	hide: () => void
// 	setAppError: (error: string) => void
// 	token: string | null
// }

// interface ActionsType {
// 	setSubmitting: (status: boolean) => void
// }

const onSubmit = ({
	getInstitutionsList,
	hide,
	setAppError,
	token,
}) => (
	values,
	{ setSubmitting },
) => {
	// const data = normalizeData(values);
	setSubmitting(true);

	// fetch(Server.MAIN + Endpoints.INSTITUTION_SAVE, {
	// 	method: 'POST',
	// 	headers: {
	// 		'Content-Type': 'application/json',
	// 		'Authorization': `Bearer ${token}`,
	// 	},
	// 	body: JSON.stringify(data),
	// })
	// 	.then(res => res.json())
	// 	.then(getInstitutionsList)
	// 	.then(() => setSubmitting(false))
	// 	.then(hide)
	// 	.catch((err) => {
	// 		setAppError(err);
	// 		setSubmitting(false);
	// 	});
};

export default onSubmit;
