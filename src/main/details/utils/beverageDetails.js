import { arrayOf, shape, string } from 'prop-types';

const beverageDetails = shape({
	id: string.isRequired,
	short_id: string.isRequired,
	badge: string.isRequired,
	label: shape({
		general: shape({
			name: arrayOf(
				shape({
					language: string,
					value: string.isRequired,
				}),
			).isRequired,
		}).isRequired,
	}).isRequired,
	added: string.isRequired,
});

export default beverageDetails;
