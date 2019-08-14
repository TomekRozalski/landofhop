import { constants, dictionary } from 'utils';

const colors = (language = constants.siteLanguages.pl) => ([
	{
		label: dictionary[language]['container.color.brown'],
		value: 'brown',
	},
	{
		label: dictionary[language]['container.color.green'],
		value: 'green',
	},
	{
		label: dictionary[language]['container.color.silver'],
		value: 'silver',
	},
]);

export default colors;
