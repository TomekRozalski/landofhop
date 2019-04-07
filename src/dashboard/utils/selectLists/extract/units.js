import { constants } from 'utils';

const extractUnit = () => ([
	{
		label: '%',
		value: constants.extract.units.percent,
	},
	{
		label: '°',
		value: constants.extract.units.degree,
	},
]);

export default extractUnit;
