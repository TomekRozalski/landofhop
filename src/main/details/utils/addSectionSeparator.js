import { constants } from 'utils';

const addSectionSeparator = (acc, curr) => (
	acc.length ? [...acc, constants.details.separators.section, curr] : [curr]
);

export default addSectionSeparator;
