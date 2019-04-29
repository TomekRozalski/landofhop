/* eslint no-shadow: 0 */
import { get, isBoolean, isNumber } from 'lodash';

import {
	alcoholRelatesList,
	alcoholScopesList,
	alcoholUnitsList,
	containerColorsList,
	containerMaterialsList,
	containerTypesList,
	containerUnitsList,
	currenciesList,
	expirationDateUnitsList,
	extractRelatesList,
	extractUnitsList,
	temperatureUnitsList,
} from 'dashboard/utils';
import LanguageNormalizer from './Language';

const none = '-';

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
	const refermentation = get(brewing, 'refermentation');
	const aged = get(brewing, 'aged');
	const dryHopped = get(brewing, 'dryHopped');
	const expirationDate = get(brewing, 'expirationDate');
	// ingredients
	const description = get(ingredients, 'description');
	const list = get(ingredients, 'list');
	const areIngredientsComplete = get(ingredients, 'complete');
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
				scope: alcoholScopesList({}).find(item => item.value === alcohol.scope)
					|| alcoholScopesList({}).find(item => item.value === none),
				unit: alcoholUnitsList().find(item => item.value === alcohol.unit),
				value: alcohol.value,
			},
		}),
		...(isBoolean(filtration) && { filtration }),
		...(isBoolean(pasteurization) && { pasteurization }),
		...(isBoolean(refermentation) && { refermentation }),
		...(aged && { aged: aged.type }),
		...(isBoolean(dryHopped) && { dryHopped }),
		...(expirationDate && {
			expirationDate: {
				value: expirationDate.value,
				unit: expirationDateUnitsList().find(item => item.value === expirationDate.unit),
			},
		}),
		// ----------------------------------
		...(description && {
			ingredients: description.map(({ language, value }) => ({
				lang: LanguageNormalizer(language),
				value,
			})),
		}),
		...(list && {
			ingredientsList: list.map(({ id, name }) => ({
				label: name[0].value,
				value: id,
			})),
		}),
		...(isBoolean(areIngredientsComplete) && { areIngredientsComplete }),
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
			price: price.map(oneprice => ({
				...oneprice,
				currency: currenciesList().find(item => item.value === oneprice.currency),
			})),
		}),
	};
};

export default Label;
