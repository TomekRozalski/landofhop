import { arrayOf, shape, string } from 'prop-types';

const beverageBasics = {
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
			language: string.isRequired,
			value: string.isRequired,
		})
	)).isRequired,
	shortId: string.isRequired,
};

export default beverageBasics;
