import React from 'react';
import PropTypes from 'prop-types';

import { colors } from 'utils/theme';

const Loupe = ({ color, title }) => {
	const actualColor = color || colors.gray[700];

	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
			<title>{ title }</title>
			<path fill={actualColor} d="M31.6 28.8L40 37.2 37.2 40l-8.4-8.4c-3.1 2.5-7 3.9-11.1 3.9C7.9 35.4 0 27.5 0 17.7S7.9 0 17.7 0s17.7 7.9 17.7 17.7C35.4 21.7 34.1 25.6 31.6 28.8zM27.6 27.3c2.5-2.6 3.9-6 3.9-9.6 0-7.6-6.2-13.8-13.8-13.8 -7.6 0-13.8 6.2-13.8 13.8 0 7.6 6.2 13.8 13.8 13.8 3.6 0 7-1.4 9.6-3.9C27.3 27.6 27.6 27.3 27.6 27.3z" />
		</svg>
	);
};

Loupe.propTypes = {
	color: PropTypes.string,
	title: PropTypes.string,
};

Loupe.defaultProps = {
	color: null,
	title: null,
};

export default Loupe;
