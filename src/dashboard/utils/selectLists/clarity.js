import { dictionary, constants } from 'utils';

const clarity = (language = constants.siteLanguages.pl) => ([
	{
		label: dictionary[language]['clarity.crystalline'],
		value: constants.clarity.crystalline,
	},
	{
		label: dictionary[language]['clarity.clear'],
		value: constants.clarity.clear,
	},
	{
		label: dictionary[language]['clarity.opalescent'],
		value: constants.clarity.opalescent,
	},
	{
		label: dictionary[language]['clarity.misty'],
		value: constants.clarity.misty,
	},
	{
		label: dictionary[language]['clarity.hazy'],
		value: constants.clarity.hazy,
	},
	{
		label: dictionary[language]['clarity.muddy'],
		value: constants.clarity.muddy,
	},
]);

export default clarity;
