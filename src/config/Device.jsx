import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const DeviceContext = React.createContext({});

async function supportsWebp() {
	// eslint-disable-next-line no-restricted-globals
	if (!self.createImageBitmap) return false;

	const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
	const blob = await fetch(webpData).then(r => r.blob());
	return createImageBitmap(blob).then(() => true, () => false);
}

const Device = ({ children }) => {
	const [pixelRatio, setPixelRatio] = useState('1x');
	const [webpSupport, setWebpSurrot] = useState(false);

	useEffect(() => {
		if (window.devicePixelRatio && window.devicePixelRatio >= 2) {
			setPixelRatio('2x');
		}

		(async () => {
			if (await supportsWebp()) {
				setWebpSurrot(true);
			} else {
				setWebpSurrot(false);
			}
		})();
	}, []);

	return (
		<DeviceContext.Provider
			value={{ pixelRatio, webpSupport }}
		>
			{ children }
		</DeviceContext.Provider>
	);
};

Device.propTypes = {
	children: PropTypes.node,
};

Device.defaultProps = {
	children: null,
};

export default Device;
