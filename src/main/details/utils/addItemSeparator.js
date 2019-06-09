import { constants } from 'utils';

const addItemSeparator = (acc, curr) => (
	acc.length ? [...acc, constants.details.separators.item, curr] : [curr]
);

export default addItemSeparator;
