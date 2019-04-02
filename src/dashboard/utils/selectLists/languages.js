import { dictionary, constants } from 'utils';

const languages = language => ([
	{
		label: dictionary[language]['language.polish'],
		value: constants.dataLanguages.pl,
	},
	{
		label: dictionary[language]['language.english'],
		value: constants.dataLanguages.en,
	},
	{
		label: dictionary[language]['language.german'],
		value: constants.dataLanguages.de,
	},
	{
		label: dictionary[language]['language.spanish'],
		value: constants.dataLanguages.es,
	},
	{
		label: dictionary[language]['language.notApplicable'],
		value: constants.dataLanguages.none,
	},
]);

export default languages;
