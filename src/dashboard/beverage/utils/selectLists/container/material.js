import { constants, dictionary } from 'utils';

const materials = (language = constants.siteLanguages.pl) => ([
	{
		label: dictionary[language]['container.material.glass'],
		value: 'glass',
	},
	{
		label: dictionary[language]['container.material.aluminum'],
		value: 'aluminum',
	},
]);

export default materials;
