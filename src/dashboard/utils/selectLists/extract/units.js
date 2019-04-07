import { constants } from 'utils';

const extractUnits = () => ([
	{
		label: '%',
		value: constants.extract.units.percent,
	},
	{
		label: '°',
		value: constants.extract.units.degree,
	},
]);

export default extractUnits;
