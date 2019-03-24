import React from 'react';
import PropTypes from 'prop-types';

import { colors } from 'utils/theme';

const Checkmark = ({ success }) => {
	const actualColor = success ? colors.success.strong : colors.gray[100];

	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 241 181">
			<path fill={actualColor} d="M209 0l32 32L92 181 0 89l32-32 60 60L209 0z" />
		</svg>
	);
};

Checkmark.propTypes = {
	success: PropTypes.bool,
};

Checkmark.defaultProps = {
	success: false,
};

export default Checkmark;
