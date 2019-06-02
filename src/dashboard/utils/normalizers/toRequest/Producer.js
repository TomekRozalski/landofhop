import {
	get,
	isArray,
	isEmpty,
	isNumber,
	isNull,
} from 'lodash';

import { constants } from 'utils';
import { convertStringToDate } from 'dashboard/utils';

const { none } = constants;

const Producer = ({
	series,
	cooperation,
	contract,
	place,
	tale,
	// -----------
	fermentation,
	style,
	extract,
	alcohol,
	filtration,
	pasteurization,
	aged,
	dryHopped,
	expirationDate,
	// -----------
	ingredients,
	ingredientsList,
	smokedMalt,
	// -----------
	bitterness,
	sweetness,
	fullness,
	power,
	hoppyness,
	temperature,
	// -----------
	price,
}) => {
	const values = {
		producer: {
			general: {
				...(series.length && {
					series: series.map(({ lang, value }) => (
						lang.value === none ? ({ value }) : ({
							language: lang.value,
							value,
						})
					)),
				}),
				...(!isNull(cooperation) && { cooperation: cooperation.map(({ value }) => value) }),
				...(!isNull(contract) && { contract: contract.value }),
				...(!isNull(place) && { place: place.value }),
				...(tale.length && {
					tale: tale.map(({ lang, value }) => (
						lang.value === none ? ({ value }) : ({
							language: lang.value,
							value,
						})
					)),
				}),
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
				...(!isNull(extract) && {
					extract: {
						relate: extract.relate.value,
						unit: extract.unit.value,
						value: extract.value,
					},
				}),
				...(!isNull(alcohol) && {
					alcohol: {
						relate: alcohol.relate.value,
						...(alcohol.scope.value !== none && { scope: alcohol.scope.value }),
						unit: alcohol.unit.value,
						value: alcohol.value,
					},
				}),
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
				...(!isNull(expirationDate) && {
					expirationDate: {
						value: expirationDate.value,
						unit: expirationDate.unit.value,
					},
				}),
			},
			ingredients: {
				...(ingredients.length && {
					description: ingredients.map(({ complete, lang, value }) => (
						lang.value === none ? ({ complete, value }) : ({
							complete,
							language: lang.value,
							value,
						})
					)),
				}),
				...(!isNull(ingredientsList) && { list: ingredientsList.map(({ value }) => value) }),
				...(!isNull(smokedMalt) && { smokedMalt }),
			},
			impressions: {
				...(isNumber(bitterness) && { bitterness }),
				...(isNumber(sweetness) && { sweetness }),
				...(isNumber(fullness) && { fullness }),
				...(isNumber(power) && { power }),
				...(isNumber(hoppyness) && { hoppyness }),
				...(!isNull(temperature) && {
					temperature: {
						from: temperature.from,
						to: temperature.to,
						unit: temperature.unit.value,
					},
				}),
			},
			...(price.length && {
				price: price.map(({ date, currency, value }) => ({
					date: convertStringToDate(date),
					currency: currency.value,
					value,
				})),
			}),
		},
	};

	if (isEmpty(values.producer.general)) {
		delete values.producer.general;
	}

	if (isEmpty(values.producer.brewing)) {
		delete values.producer.brewing;
	}

	if (isEmpty(values.producer.ingredients)) {
		delete values.producer.ingredients;
	}

	if (isEmpty(values.producer.impressions)) {
		delete values.producer.impressions;
	}

	if (isEmpty(values.producer)) {
		delete values.producer;
	}

	return values;
};

export default Producer;
