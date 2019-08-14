import { constants, dictionary } from 'utils';

const alcoholRelates = (language = constants.siteLanguages.pl) => ([
	{
		label: dictionary[language]['alcoholRelate.capacity'],
		value: constants.alcohol.relates.capacity,
	},
	{
		label: dictionary[language]['alcoholRelate.abv'],
		value: constants.alcohol.relates.abv,
	},
]);

export default alcoholRelates;
