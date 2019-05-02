import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const DeviceContext = React.createContext({});

const Device = ({ children }) => {
	const [pixelRatio, setPixelRatio] = useState('x1');

	useEffect(() => {
		if (window.devicePixelRatio && window.devicePixelRatio >= 2) {
			setPixelRatio('x2');
		}
	}, []);

	return (
		<DeviceContext.Provider
			value={{ pixelRatio }}
		>
			{ children }
		</DeviceContext.Provider>
	);
};

Device.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Device;
