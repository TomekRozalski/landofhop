import React from 'react';
import PropTypes from 'prop-types';

import { colors } from 'utils/theme';

const Warning = ({ color }) => {
	const actualColor = color || colors.warning.strong;

	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 26">
			<path fill={actualColor} d="M27.82 23.78L15.2 0.79C14.94 0.3 14.43 0 13.88 0 13.33 0 12.82 0.3 12.56 0.79c0 0 0 0 0 0L0.18 23.79c-0.25 0.47-0.24 1.02 0.03 1.48C0.49 25.73 0.97 26 1.5 26h25c0.53 0 1.02-0.27 1.29-0.73C28.06 24.81 28.08 24.26 27.82 23.78zM12.13 8.17C12.22 8.06 12.36 8 12.5 8h3c0.14 0 0.28 0.06 0.37 0.17 0.09 0.11 0.14 0.25 0.12 0.39l-1 9C14.97 17.81 14.76 18 14.5 18h-1c-0.25 0-0.47-0.19-0.5-0.44l-1-9C11.99 8.41 12.03 8.27 12.13 8.17zM14 23c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2S15.1 23 14 23z" />
		</svg>
	);
};

Warning.propTypes = {
	color: PropTypes.string,
};

Warning.defaultProps = {
	color: null,
};

export default Warning;
