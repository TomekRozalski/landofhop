import { constants, dictionary } from 'utils';

const types = (language = constants.siteLanguages.pl) => ([
	{
		label: dictionary[language]['container.type.bottle'],
		value: constants.container.types.bottle,
	},
	{
		label: dictionary[language]['container.type.can'],
		value: constants.container.types.can,
	},
]);

export default types;
