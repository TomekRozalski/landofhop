import {
	get,
	isArray,
	isEmpty,
	isNull,
	isNumber,
} from 'lodash';

import { constants } from 'utils';
import { convertStringToDate } from 'dashboard/utils';

const { none } = constants;

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
	aged,
	dryHopped,
	// -----------
	color,
	clarity,
	// -----------
	price,
	added,
	updated,
	notes,
	id,
	shortId,
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
				...(aged.length && {
					aged: aged.map(({
						previousContent,
						time,
						type,
						wood,
					}) => ({
						...(previousContent && { previousContent: previousContent.map(item => item.value) }),
						...(
							time
							&& isNumber(get(time, 'value'))
							&& get(time, 'value') > 0
							&& get(time, 'unit.value')
							&& {
								time: {
									unit: get(time, 'unit.value'),
									value: get(time, 'value'),
								},
							}
						),
						...(type && { type }),
						...(wood && { wood }),
					})),
				}),
				...(isArray(dryHopped) && { dryHopped: dryHopped.map(hop => hop.value) }),
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
			...(!isNull(notes) && { notes }),
		},
		...(!isNull(added) && { added: convertStringToDate(added) }),
		...(!isNull(updated) && { updated: convertStringToDate(updated) }),
		...(id && { id }),
		...(shortId && { shortId }),
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
