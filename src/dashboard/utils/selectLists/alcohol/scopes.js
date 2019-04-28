import PropTypes from 'prop-types';

const alcoholScopes = ({ withEmpty }) => {
	const values = [
		{
			label: '~ <0.5%',
			value: '<0.5%',
		},
		{
			label: '~ ±0.5%',
			value: '±0.5%',
		},
		{
			label: '~ ±1.0%',
			value: '±1.0%',
		},
	];

	if (withEmpty) {
		values.unshift({
			label: '--',
			value: '-',
		});
	}

	return values;
};

alcoholScopes.propTypes = {
	withEmpty: PropTypes.bool,
};

alcoholScopes.defaultProps = {
	withEmpty: false,
};

export default alcoholScopes;
