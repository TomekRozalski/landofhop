import { constants, dictionary } from 'utils';

const colors = (language = constants.siteLanguages.pl) => ([
	{
		label: dictionary[language]['container.color.brown'],
		value: 'brown',
	},
	{
		label: dictionary[language]['container.color.black'],
		value: 'black',
	},
	{
		label: dictionary[language]['container.color.green'],
		value: 'green',
	},
	{
		label: dictionary[language]['container.color.silver'],
		value: 'silver',
	},
	{
		label: dictionary[language]['container.color.transparent'],
		value: 'transparent',
	},
]);

export default colors;
