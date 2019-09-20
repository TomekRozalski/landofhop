import { useContext } from 'react';
import { string } from 'prop-types';

import { DeviceContext } from 'config';
import { constants } from 'utils';

const getCoverPath = ({ badge, brandBadge, shortId }) => {
	const { webpSupport } = useContext(DeviceContext);
	const coverPath = `${constants.servers.images}${brandBadge}/${badge}/${shortId}/cover`;

	return `${coverPath}/${webpSupport ? 'webp' : 'jpg'}`;
};

getCoverPath.propTypes = {
	badge: string.isRequired,
	brandBadge: string.isRequired,
	shortId: string.isRequired,
};

export default getCoverPath;
