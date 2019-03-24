import React from 'react';
import PropTypes from 'prop-types';

import { colors } from 'utils/theme';

const Locked = ({ color }) => {
	const actualColor = color || colors.gray[100];

	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 21.1527">
			<path fill={actualColor} d="M13.3749 9.9374H11.5V5.9375c0-2.2401-1.7944-4.0624-4.0001-4.0624C5.2944 1.8751 3.5 3.6974 3.5 5.9375v3.9999H1.625V5.9375C1.625 2.6635 4.2605 0 7.4999 0c3.2396 0 5.8751 2.6635 5.8751 5.9375V9.9374z" />
			<path fill={actualColor} d="M7.5 6.1527c-4.1421 0-7.5 3.3578-7.5 7.5 0 4.1421 3.3579 7.5 7.5 7.5s7.5-3.3579 7.5-7.5C15 9.5106 11.6421 6.1527 7.5 6.1527zM8.7632 15.9066c0 0.4274-0.3464 0.5645-0.7737 0.5645H7.0104c-0.4271 0-0.7736-0.1371-0.7736-0.5645l0.5748-2.778c-0.3383-0.2267-0.5748-0.5935-0.5748-1.0312 0-0.6976 0.5656-1.2631 1.2632-1.2631 0.6976 0 1.2632 0.5656 1.2632 1.2631 0 0.4377-0.2365 0.8045-0.5748 1.0312L8.7632 15.9066z" />
		</svg>
	);
};

Locked.propTypes = {
	color: PropTypes.string,
};

Locked.defaultProps = {
	color: null,
};

export default Locked;
