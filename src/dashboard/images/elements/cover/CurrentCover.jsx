import React from 'react';
import { shape, string } from 'prop-types';
import styled from 'styled-components';

import { constants } from 'utils';

const Img = styled.img`
	display: block;
	width: 100%;
`;

const CurrentCover = ({ params }) => {
	const { badge, brand, shortId } = params;
	const path = `${constants.servers.images}${brand}/${badge}/${shortId}/cover/jpg/2x.jpg`;

	return <Img alt="" src={path} />;
};

CurrentCover.propTypes = {
	params: shape({
		badge: string.isRequired,
		brand: string.isRequired,
		shortId: string.isRequired,
	}).isRequired,
};

export default CurrentCover;
