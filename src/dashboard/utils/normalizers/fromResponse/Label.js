/* eslint no-shadow: 0 */
import { get, isBoolean, isNumber } from 'lodash';

import { constants } from 'utils';
import { getNameByLanguage } from 'utils/helpers';
import {
	agedPreviousContentList,
	agedTimeUnitsList,
	alcoholRelatesList,
	alcoholScopesList,
	alcoholUnitsList,
	containerColorsList,
	containerMaterialsList,
	containerTypesList,
	containerUnitsList,
	convertDateToString,
	currenciesList,
	expirationDateUnitsList,
	extractRelatesList,
	extractUnitsList,
	temperatureUnitsList,
} from 'dashboard/utils';
import LanguageNormalizer from './Language';

const { none } = constants;

const Label = ({
	badge,
	label: {
		general: {
			name,
			series,
			brand,
			cooperation,
			contract,
			place,
			tale,
			barcode,
		},
		brewing,
		ingredients,
		impressions,
		container,
		price,
	},
}) => {
	// brewing
	const fermentation = get(brewing, 'fermentation');
	const style = get(brewing, 'style');
	const extract = get(brewing, 'extract');
	const alcohol = get(brewing, 'alcohol');
	const filtration = get(brewing, 'filtration');
	const pasteurization = get(brewing, 'pasteurization');
	const aged = get(brewing, 'aged');
	const dryHopped = get(brewing, 'dryHopped');
	const expirationDate = get(brewing, 'expirationDate');
	// ingredients
	const description = get(ingredients, 'description');
	const list = get(ingredients, 'list');
	const smokedMalt = get(ingredients, 'smokedMalt');
	// impressions
	const bitterness = get(impressions, 'bitterness');
	const sweetness = get(impressions, 'sweetness');
	const fullness = get(impressions, 'fullness');
	const power = get(impressions, 'power');
	const hoppyness = get(impressions, 'hoppyness');
	const temperature = get(impressions, 'temperature');

	return {
		badge,
		// ----------------------------------
		name: name.map(({ language, value }) => ({
			lang: LanguageNormalizer(language),
			value,
		})),
		...(series && {
			series: series.map(({ language, value }) => ({
				lang: LanguageNormalizer(language),
				value,
			})),
		}),
		brand: {
			label: brand.name[0].value,
			value: brand.id,
			badge: brand.badge,
		},
		...(cooperation && {
			cooperation: cooperation.map(({ id, name }) => ({
				label: name[0].value,
				value: id,
			})),
		}),
		...(contract && {
			contract: {
				label: contract.name[0].value,
				value: contract.id,
			},
		}),
		...(place && {
			place: {
				label: `${place.city[0].value} (${place.institution.name[0].value})`,
				value: place.id,
			},
		}),
		...(tale && {
			tale: tale.map(({ language, value }) => ({
				lang: LanguageNormalizer(language),
				value,
			})),
		}),
		...(barcode && { barcode }),
		// ----------------------------------
		...(fermentation && { fermentation }),
		...(style && {
			style: style.map(({ language, value }) => ({
				lang: LanguageNormalizer(language),
				value,
			})),
		}),
		...(extract && {
			extract: {
				relate: extractRelatesList().find(item => item.value === extract.relate),
				unit: extractUnitsList().find(item => item.value === extract.unit),
				value: extract.value,
			},
		}),
		...(alcohol && {
			alcohol: {
				relate: alcoholRelatesList().find(item => item.value === alcohol.relate),
				scope: alcoholScopesList({ withEmpty: true }).find(item => item.value === alcohol.scope)
					|| alcoholScopesList({ withEmpty: true }).find(item => item.value === none),
				unit: alcoholUnitsList().find(item => item.value === alcohol.unit),
				value: alcohol.value,
			},
		}),
		...(isBoolean(filtration) && { filtration }),
		...(isBoolean(pasteurization) && { pasteurization }),
		...(aged && {
			aged: aged.map(({
				previousContent,
				time,
				type,
				wood,
			}) => ({
				...(previousContent && {
					previousContent: previousContent
						.map(contentValue => agedPreviousContentList()
							.find(item => item.value === contentValue)),
				}),
				...(time && {
					time: {
						unit: agedTimeUnitsList().find(item => item.value === time.unit),
						value: time.value,
					},
				}),
				...(type && { type }),
				...(wood && { wood }),
			})),
		}),
		...(dryHopped && {
			dryHopped: dryHopped === true ? [] : dryHopped.map(({ id, name, type }) => ({
				type,
				label: getNameByLanguage({ values: name, language: constants.siteLanguages.pl }).value,
				value: id,
			})),
		}),
		...(expirationDate && {
			expirationDate: {
				value: expirationDate.value,
				unit: expirationDateUnitsList().find(item => item.value === expirationDate.unit),
			},
		}),
		// ----------------------------------
		...(description && {
			ingredients: description.map(({ complete, language, value }) => ({
				complete,
				lang: LanguageNormalizer(language),
				value,
			})),
		}),
		...(list && {
			ingredientsList: list.map(({ id, name, type }) => ({
				label: name[0].value,
				type,
				value: id,
			})),
		}),
		...(isBoolean(smokedMalt) && { smokedMalt }),
		// ----------------------------------
		...(bitterness && isNumber(bitterness) && { bitterness }),
		...(sweetness && isNumber(sweetness) && { sweetness }),
		...(fullness && isNumber(fullness) && { fullness }),
		...(power && isNumber(power) && { power }),
		...(hoppyness && isNumber(hoppyness) && { hoppyness }),
		...(temperature && {
			temperature: {
				from: temperature.from,
				to: temperature.to,
				unit: temperatureUnitsList()[0],
			},
		}),
		// ----------------------------------
		container: {
			capacityValue: container.value,
			color: containerColorsList().find(item => item.value === container.color),
			material: containerMaterialsList().find(item => item.value === container.material),
			unit: containerUnitsList().find(item => item.value === container.unit),
			type: containerTypesList().find(item => item.value === container.type),
			...(isBoolean(container.hasCapWireFlip) && { hasCapWireFlip: container.hasCapWireFlip }),
		},
		...(price && {
			price: price.map(({ currency, date, value }) => ({
				currency: currenciesList().find(item => item.value === currency),
				date: convertDateToString(date),
				value,
			})),
		}),
	};
};

export default Label;
