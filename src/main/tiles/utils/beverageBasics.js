import { arrayOf, shape, string } from 'prop-types';

const beverageBasics = shape({
	added: string.isRequired,
	badge: string.isRequired,
	brand: shape({
		badge: string.isRequired,
		name: arrayOf(
			shape({
				value: string.isRequired,
				language: string.isRequired,
			}),
		).isRequired,
	}).isRequired,
	id: string.isRequired,
	name: arrayOf((
		shape({
			value: string.isRequired,
			language: string.isRequired,
		})
	)).isRequired,
	short_id: string.isRequired,
});

export default beverageBasics;
