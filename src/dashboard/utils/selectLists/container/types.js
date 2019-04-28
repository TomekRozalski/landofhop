import { constants } from 'utils';

const types = () => ([
	{
		label: 'Butelka',
		value: constants.container.types.bottle,
	},
	{
		label: 'Puszka',
		value: constants.container.types.can,
	},
]);

export default types;
