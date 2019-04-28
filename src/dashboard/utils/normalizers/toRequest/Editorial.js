import { isEmpty, isNull } from 'lodash';

import { convertStringToDate } from 'dashboard/utils';

const none = '-';

const Editorial = ({
	cooperation,
	contract,
	place,
	// -----------
	fermentation,
	style,
	alcoholScope,
	filtration,
	pasteurization,
	refermentation,
	aged,
	dryHopped,
	// -----------
	color,
	clarity,
	// -----------
	price,
	images,
	cap,
	added,
	updated,
}) => {
	const values = {
		editorial: {
			general: {
				...(!isNull(cooperation) && { cooperation: cooperation.map(({ value }) => value) }),
				...(!isNull(contract) && { contract: contract.value }),
				...(!isNull(place) && { place: place.value }),
			},
			brewing: {
				...(!isNull(fermentation) && { fermentation }),
				...(style.length && {
					style: style.map(({ lang, value }) => (
						lang.value === none ? ({ value }) : ({
							language: lang.value,
							value,
						})
					)),
				}),
				...(!isNull(alcoholScope) && { alcoholScope: alcoholScope.value }),
				...(!isNull(filtration) && { filtration }),
				...(!isNull(pasteurization) && { pasteurization }),
				...(!isNull(refermentation) && { refermentation }),
				...(!isNull(aged) && {
					aged: {
						type: aged,
					},
				}),
				...(!isNull(dryHopped) && { dryHopped }),
			},
			impressions: {
				...(!isNull(color) && { color }),
				...(!isNull(clarity) && { clarity: clarity.value }),
			},
			...(price.length && {
				price: price.map(({ date, currency, value }) => ({
					date: convertStringToDate(date),
					currency: currency.value,
					value,
				})),
			}),
			...(!isNull(images) && { images }),
			cap,
			...(!isNull(added) && { added: convertStringToDate(added) }),
			...(!isNull(updated) && { updated: convertStringToDate(updated) }),
		},
	};

	if (isEmpty(values.editorial.general)) {
		delete values.editorial.general;
	}

	if (isEmpty(values.editorial.brewing)) {
		delete values.editorial.brewing;
	}

	if (isEmpty(values.editorial.impressions)) {
		delete values.editorial.impressions;
	}

	if (isEmpty(values.editorial)) {
		delete values.editorial;
	}

	return values;
};

export default Editorial;
