/* eslint no-shadow: 0 */
import { get, isBoolean, isNumber } from 'lodash';

import { constants } from 'utils';
import { getNameByLanguage } from 'utils/helpers';
import {
	alcoholScopesList,
	clarityList,
	convertDateToString,
	currenciesList,
} from 'dashboard/utils';
import LanguageNormalizer from './Language';

const { none } = constants;

const Editorial = (beverage) => {
	// general
	const cooperation = get(beverage, 'editorial.general.cooperation');
	const contract = get(beverage, 'editorial.general.contract');
	const place = get(beverage, 'editorial.general.place');
	// brewing
	const fermentation = get(beverage, 'editorial.brewing.fermentation');
	const style = get(beverage, 'editorial.brewing.style');
	const alcoholScope = get(beverage, 'editorial.brewing.alcohol.scope');
	const filtration = get(beverage, 'editorial.brewing.filtration');
	const pasteurization = get(beverage, 'editorial.brewing.pasteurization');
	const refermentation = get(beverage, 'editorial.brewing.refermentation');
	const aged = get(beverage, 'editorial.brewing.aged');
	const dryHopped = get(beverage, 'editorial.brewing.dryHopped');
	// impressions
	const color = get(beverage, 'editorial.impressions.color');
	const clarity = get(beverage, 'editorial.impressions.clarity');
	// other
	const price = get(beverage, 'editorial.price');
	const images = get(beverage, 'editorial.images');
	const cap = get(beverage, 'editorial.cap');
	const added = get(beverage, 'added');
	const updated = get(beverage, 'updated');
	const id = get(beverage, 'id');

	return {
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
		// ----------------------------------
		...(fermentation && { fermentation }),
		...(style && {
			style: style.map(({ language, value }) => ({
				lang: LanguageNormalizer(language),
				value,
			})),
		}),
		...(alcoholScope && {
			alcoholScope: alcoholScopesList({}).find(item => item.value === alcoholScope)
				|| alcoholScopesList({}).find(item => item.value === none),
		}),
		...(isBoolean(filtration) && { filtration }),
		...(isBoolean(pasteurization) && { pasteurization }),
		...(isBoolean(refermentation) && { refermentation }),
		...(aged && { aged: aged.type }),
		...(dryHopped && {
			dryHopped: dryHopped === true ? [] : dryHopped.map(({ id, name, type }) => ({
				type,
				label: getNameByLanguage({ values: name, language: constants.siteLanguages.pl }).value,
				value: id,
			})),
		}),
		// ----------------------------------
		...(color && { color }),
		...(clarity && { sweetness: clarityList.find(item => item.value === clarity) }),
		// ----------------------------------
		...(price && {
			price: price.map(({ currency, date, value }) => ({
				currency: currenciesList().find(item => item.value === currency),
				date: convertDateToString(date),
				value,
			})),
		}),
		...(isNumber(images) && { images }),
		...(isBoolean(cap) && { cap }),
		...(added && { added: convertDateToString(added) }),
		...(updated && { updated: convertDateToString(updated) }),
		...(id && { id }),
	};
};

export default Editorial;
