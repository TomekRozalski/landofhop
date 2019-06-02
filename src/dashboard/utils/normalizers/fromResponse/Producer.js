import { get, isBoolean, isNumber } from 'lodash';

import { constants } from 'utils';
import { getNameByLanguage } from 'utils/helpers';
import {
	agedPreviousContentList,
	agedTimeUnitsList,
	alcoholRelatesList,
	alcoholScopesList,
	alcoholUnitsList,
	convertDateToString,
	currenciesList,
	expirationDateUnitsList,
	extractRelatesList,
	extractUnitsList,
	temperatureUnitsList,
} from 'dashboard/utils';
import LanguageNormalizer from './Language';

const { none } = constants;

const Producer = (beverage) => {
	// general
	const series = get(beverage, 'producer.general.series');
	const cooperation = get(beverage, 'producer.general.cooperation');
	const contract = get(beverage, 'producer.general.contract');
	const place = get(beverage, 'producer.general.place');
	const tale = get(beverage, 'producer.general.tale');
	// brewing
	const fermentation = get(beverage, 'producer.brewing.fermentation');
	const style = get(beverage, 'producer.brewing.style');
	const extract = get(beverage, 'producer.brewing.extract');
	const alcohol = get(beverage, 'producer.brewing.alcohol');
	const filtration = get(beverage, 'producer.brewing.filtration');
	const pasteurization = get(beverage, 'producer.brewing.pasteurization');
	const aged = get(beverage, 'producer.brewing.aged');
	const dryHopped = get(beverage, 'producer.brewing.dryHopped');
	const expirationDate = get(beverage, 'producer.brewing.expirationDate');
	// ingredients
	const description = get(beverage, 'producer.ingredients.description');
	const list = get(beverage, 'producer.ingredients.list');
	const smokedMalt = get(beverage, 'producer.ingredients.smokedMalt');
	// impressions
	const bitterness = get(beverage, 'producer.impressions.bitterness');
	const sweetness = get(beverage, 'producer.impressions.sweetness');
	const fullness = get(beverage, 'producer.impressions.fullness');
	const power = get(beverage, 'producer.impressions.power');
	const hoppyness = get(beverage, 'producer.impressions.hoppyness');
	const temperature = get(beverage, 'producer.impressions.temperature');
	// other
	const price = get(beverage, 'producer.price');

	return {
		...(series && {
			series: series.map(({ language, value }) => ({
				lang: LanguageNormalizer(language),
				value,
			})),
		}),
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
		...(price && {
			price: price.map(({ currency, date, value }) => ({
				currency: currenciesList().find(item => item.value === currency),
				date: convertDateToString(date),
				value,
			})),
		}),
	};
};

export default Producer;
