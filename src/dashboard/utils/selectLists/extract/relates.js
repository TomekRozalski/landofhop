import { constants, dictionary } from 'utils';


const extractRelate = (language = constants.siteLanguages.pl) => ([
	{
		label: dictionary[language]['extractRelate.weight'],
		value: constants.extract.relates.weight,
	},
	{
		label: dictionary[language]['extractRelate.plato'],
		value: constants.extract.relates.plato,
	},
	{
		label: dictionary[language]['extractRelate.blg'],
		value: constants.extract.relates.blg,
	},
]);

export default extractRelate;
