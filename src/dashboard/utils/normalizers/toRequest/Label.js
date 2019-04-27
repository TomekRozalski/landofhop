import { isEmpty, isNull } from 'lodash';

const none = '-';

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
				...(barcode !== null && { barcode }),
			},
			// brewing: {
			// 	...(isFermentation && { fermentation }),
			// 	...(style.length && {
			// 		style: style.map(({ lang, value }) => (
			// 			get(lang, 'value') === 'none' ? ({ value }) : ({
			// 				language: get(lang, 'value'),
			// 				value,
			// 			})
			// 		)),
			// 	}),
			// 	...(isExtract && {
			// 		extract: {
			// 			relate: get(extract, 'relate.value'),
			// 			unit: get(extract, 'unit.value'),
			// 			value: extract.value,
			// 		},
			// 	}),
			// 	...(isAlcohol && {
			// 		alcohol: {
			// 			relate: get(alcohol, 'relate.value'),
			// 			...(get(alcohol, 'scope.value') !== '--' && { scope: get(alcohol, 'scope.value') }),
			// 			unit: get(alcohol, 'unit.value'),
			// 			value: alcohol.value,
			// 		},
			// 	}),
			// 	...(isFiltration && { filtration }),
			// 	...(isPasteurization && { pasteurization }),
			// 	...(isRefermentation && { refermentation }),
			// 	...(isAged && {
			// 		aged: {
			// 			type: aged,
			// 		},
			// 	}),
			// 	...(isDryHopped && { dryHopped }),
			// 	...(isExpirationDate && {
			// 		expirationDate: {
			// 			value: expirationDate.value,
			// 			unit: get(expirationDate, 'unit.value'),
			// 		},
			// 	}),
			// },
			// ingredients: {
			// 	...(ingredients.length && {
			// 		description: ingredients.map(({ lang, value }) => (
			// 			get(lang, 'value') === 'none' ? ({ value }) : ({
			// 				language: get(lang, 'value'),
			// 				value,
			// 			})
			// 		)),
			// 	}),
			// 	...(ingredientsList.length && { list: ingredientsList.map(({ value }) => value) }),
			// 	...(ingredients.length && { complete: areIngredientsComplete }),
			// 	...(isSmokedMalt && { smokedMalt }),
			// },
			// impressions: {
			// 	...(isBitterness && { bitterness }),
			// 	...(isSweetness && { sweetness }),
			// 	...(isFullness && { fullness }),
			// 	...(isPower && { power }),
			// 	...(isHoppyness && { hoppyness }),
			// 	...(isTemperature && {
			// 		temperature: {
			// 			from: temperature.from,
			// 			to: temperature.to,
			// 			unit: get(temperature, 'unit.value'),
			// 		},
			// 	}),
			// },
			// container: {
			// 	color: get(container, 'color.value'),
			// 	material: get(container, 'material.value'),
			// 	unit: get(container, 'unit.value'),
			// 	type: get(container, 'type.value'),
			// 	value: container.capacityValue,
			// 	...(container.hasCapWireFlip && { hasCapWireFlip: true }),
			// },
			// ...(price.length && {
			// 	price: price.map(({ date, currency, value }) => ({
			// 		date,
			// 		currency: get(currency, 'value'),
			// 		value,
			// 	})),
			// }),
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
