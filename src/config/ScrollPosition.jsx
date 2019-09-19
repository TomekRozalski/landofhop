import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const ScrollPositionContext = React.createContext({});

const ScrollPosition = ({ children }) => {
	const [scrollPosition, setScrollPosition] = useState(null);

	return (
		<ScrollPositionContext.Provider
			value={{ scrollPosition, setScrollPosition }}
		>
			{ children }
		</ScrollPositionContext.Provider>
	);
};

ScrollPosition.propTypes = {
	children: PropTypes.node,
};

ScrollPosition.defaultProps = {
	children: null,
};

export default ScrollPosition;
