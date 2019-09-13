import {
	arrayOf,
	number,
	shape,
	string,
} from 'prop-types';

export default {
	added: string.isRequired,
	badge: string.isRequired,
	brand: shape({
		badge: string.isRequired,
		name: arrayOf(
			shape({
				language: string,
				value: string.isRequired,
			}),
		).isRequired,
	}).isRequired,
	container: shape({
		unit: string.isRequired,
		type: string.isRequired,
		value: number.isRequired,
	}).isRequired,
	id: string.isRequired,
	name: arrayOf((
		shape({
			language: string,
			value: string.isRequired,
		})
	)).isRequired,
	shortId: string.isRequired,
};
