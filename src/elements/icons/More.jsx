import React from 'react';
import PropTypes from 'prop-types';

import { colors } from 'utils/theme';

const More = ({ color, title }) => {
	const actualColor = color || colors.gray[500];

	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 9">
			<title>{ title }</title>
			<circle fill={actualColor} cx="35.5" cy="4.5" r="4.5" />
			<circle fill={actualColor} cx="20" cy="4.5" r="4.5" />
			<circle fill={actualColor} cx="4.5" cy="4.5" r="4.5" />
		</svg>
	);
};

More.propTypes = {
	color: PropTypes.string,
	title: PropTypes.string,
};

More.defaultProps = {
	color: null,
	title: null,
};

export default More;
