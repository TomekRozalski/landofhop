import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const BeverageDetailsContext = React.createContext({});

const BeverageDetails = ({ children }) => {
	const [beverage, setBeverage] = useState(null);

	return (
		<BeverageDetailsContext.Provider value={{ beverage, setBeverage }}>
			{ children }
		</BeverageDetailsContext.Provider>
	);
};

BeverageDetails.propTypes = {
	children: PropTypes.node,
};

BeverageDetails.defaultProps = {
	children: null,
};

export default BeverageDetails;
