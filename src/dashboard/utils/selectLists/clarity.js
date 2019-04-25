import { constants } from 'utils';

const clarity = () => ([
	{
		label: 'Krystaliczne',
		value: constants.clarity.crystalline,
	},
	{
		label: 'Czyste',
		value: constants.clarity.clear,
	},
	{
		label: 'Opalizujące',
		value: constants.clarity.opalescent,
	},
	{
		label: 'Zamglone',
		value: constants.clarity.misty,
	},
	{
		label: 'Hazy',
		value: constants.clarity.hazy,
	},
	{
		label: 'Błotniste',
		value: constants.clarity.muddy,
	},
]);

export default clarity;
