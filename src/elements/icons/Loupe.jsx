import React from 'react';
import PropTypes from 'prop-types';

import { colors } from 'utils/theme';

const Loupe = ({ color }) => {
	const actualColor = color || colors.gray[200];

	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
			<path fill={actualColor} d="M29.7 28.3l-8.9-9c1.7-2.1 2.8-4.7 2.8-7.5C23.5 5.4 18.1 0 11.7 0S0 5.4 0 11.8s5.3 11.8 11.7 11.8c2.8 0 5.3-1 7.4-2.7l8.9 8.9C28.2 30 28.4 30 28.8 30s0.6 0 0.9-0.2C30.1 29.4 30.1 28.7 29.7 28.3L29.7 28.3zM11.7 21.4c-5.3 0-9.6-4.3-9.6-9.6s4.3-9.6 9.6-9.6 9.6 4.3 9.6 9.6S17.1 21.4 11.7 21.4z" />
		</svg>
	);
};

Loupe.propTypes = {
	color: PropTypes.string,
};

Loupe.defaultProps = {
	color: null,
};

export default Loupe;
