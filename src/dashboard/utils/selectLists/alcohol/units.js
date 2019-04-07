import { constants } from 'utils';

const alcoholUnits = () => ([
	{
		label: '%',
		value: constants.alcohol.units.percent,
	},
	{
		label: '°',
		value: constants.alcohol.units.degree,
	},
]);

export default alcoholUnits;
