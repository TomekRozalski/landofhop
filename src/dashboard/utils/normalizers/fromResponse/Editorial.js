/* eslint no-shadow: 0 */
import { get, isBoolean, isNumber } from 'lodash';

import { constants } from 'utils';
import { getNameByLanguage } from 'utils/helpers';
import {
	agedPreviousContentList,
	agedTimeUnitsList,
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
	const aged = get(beverage, 'editorial.brewing.aged');
	const dryHopped = get(beverage, 'editorial.brewing.dryHopped');
	// impressions
	const color = get(beverage, 'editorial.impressions.color');
	const clarity = get(beverage, 'editorial.impressions.clarity');
	// other
	const price = get(beverage, 'editorial.price');
	const added = get(beverage, 'added');
	const updated = get(beverage, 'updated');
	const notes = get(beverage, 'editorial.notes');
	const id = get(beverage, 'id');
	const shortId = get(beverage, 'shortId');

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
		// ----------------------------------
		...(color && { color }),
		...(clarity && { clarity: clarityList().find(item => item.value === clarity) }),
		// ----------------------------------
		...(price && {
			price: price.map(({ currency, date, value }) => ({
				currency: currenciesList().find(item => item.value === currency),
				date: convertDateToString(date),
				value,
			})),
		}),
		...(added && { added: convertDateToString(added) }),
		...(updated && { updated: convertDateToString(updated) }),
		...(notes && { notes }),
		...(id && { id }),
		...(shortId && { shortId }),
	};
};

export default Editorial;
