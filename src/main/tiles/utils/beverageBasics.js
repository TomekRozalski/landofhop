import { arrayOf, shape, string } from 'prop-types';

const beverageBasics = shape({
	id: string.isRequired,
	added: string.isRequired,
	short_id: string.isRequired,
	brand: shape({
		badge: string.isRequired,
		name: arrayOf(
			shape({
				value: string.isRequired,
				language: string.isRequired,
			}),
		).isRequired,
	}).isRequired,
	name: arrayOf((
		shape({
			value: string.isRequired,
			language: string.isRequired,
		})
	)).isRequired,
});

export default beverageBasics;
