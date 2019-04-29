import { isEmpty, isNull } from 'lodash';

import { constants } from 'utils';
import { convertStringToDate } from 'dashboard/utils';

const { none } = constants;

const Label = ({
	badge,
	// -----------
	name,
	series,
	brand,
	cooperation,
	contract,
	place,
	tale,
	barcode,
	// -----------
	fermentation,
	style,
	extract,
	alcohol,
	filtration,
	pasteurization,
	refermentation,
	aged,
	dryHopped,
	expirationDate,
	// -----------
	ingredients,
	ingredientsList,
	areIngredientsComplete,
	smokedMalt,
	// -----------
	bitterness,
	sweetness,
	fullness,
	power,
	hoppyness,
	temperature,
	// -----------
	container,
	price,
	// -----------
	id,
}) => {
	const values = {
		badge,
		label: {
			general: {
				name: name.map(({ lang, value }) => (
					lang.value === none ? ({ value }) : ({
						language: lang.value,
						value,
					})
				)),
				...(series.length && {
					series: series.map(({ lang, value }) => (
						lang.value === none ? ({ value }) : ({
							language: lang.value,
							value,
						})
					)),
				}),
				brand: brand.value,
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
				...(!isNull(barcode) && { barcode }),
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
				...(!isNull(refermentation) && { refermentation }),
				...(!isNull(aged) && {
					aged: {
						type: aged,
					},
				}),
				...(!isNull(dryHopped) && { dryHopped }),
				...(!isNull(expirationDate) && {
					expirationDate: {
						value: expirationDate.value,
						unit: expirationDate.unit.value,
					},
				}),
			},
			ingredients: {
				...(ingredients.length && {
					description: ingredients.map(({ lang, value }) => (
						lang.value === none ? ({ value }) : ({
							language: lang.value,
							value,
						})
					)),
				}),
				...(!isNull(ingredientsList) && { list: ingredientsList.map(({ value }) => value) }),
				...(!isNull(areIngredientsComplete) && { complete: areIngredientsComplete }),
				...(!isNull(smokedMalt) && { smokedMalt }),
			},
			impressions: {
				...(!isNull(bitterness) && { bitterness }),
				...(!isNull(sweetness) && { sweetness }),
				...(!isNull(fullness) && { fullness }),
				...(!isNull(power) && { power }),
				...(!isNull(hoppyness) && { hoppyness }),
				...(!isNull(temperature) && {
					temperature: {
						from: temperature.from,
						to: temperature.to,
						unit: temperature.unit.value,
					},
				}),
			},
			container: {
				color: container.color.value,
				material: container.material.value,
				unit: container.unit.value,
				type: container.type.value,
				value: container.capacityValue,
				...(
					container.type.value === constants.container.types.bottle
					&& container.hasCapWireFlip
					&& { hasCapWireFlip: true }
				),
			},
			...(price.length && {
				price: price.map(({ date, currency, value }) => ({
					date: convertStringToDate(date),
					currency: currency.value,
					value,
				})),
			}),
		},
		...(id && { id }),
	};

	if (isEmpty(values.label.brewing)) {
		delete values.label.brewing;
	}

	if (isEmpty(values.label.ingredients)) {
		delete values.label.ingredients;
	}

	if (isEmpty(values.label.impressions)) {
		delete values.label.impressions;
	}

	return values;
};

export default Label;
