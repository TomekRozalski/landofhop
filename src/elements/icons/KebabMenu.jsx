import React from 'react';
import PropTypes from 'prop-types';

import { colors } from 'utils/theme';

const KebabMenu = ({ color, title }) => {
	const actualColor = color || colors.gray[500];

	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 40">
			<title>{ title }</title>
			<circle fill={actualColor} cx="4.5" cy="35.5" r="4.5" />
			<circle fill={actualColor} cx="4.5" cy="20" r="4.5" />
			<circle fill={actualColor} cx="4.5" cy="4.5" r="4.5" />
		</svg>
	);
};

KebabMenu.propTypes = {
	color: PropTypes.string,
	title: PropTypes.string,
};

KebabMenu.defaultProps = {
	color: null,
	title: null,
};

export default KebabMenu;
