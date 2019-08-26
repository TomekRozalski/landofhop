import React from 'react';
import { shape, string } from 'prop-types';
import styled from 'styled-components';

import { constants } from 'utils';

const Img = styled.img`
	display: block;
	width: 220px;
	height: 220px;
	margin: 2rem 0;
`;

const CurrentCap = ({ params }) => {
	const { badge, brand, shortId } = params;
	const path = `${constants.servers.images}${brand}/${badge}/${shortId}/cap/jpg/2x.jpg`;

	return <Img alt="" src={path} />;
};

CurrentCap.propTypes = {
	params: shape({
		badge: string.isRequired,
		brand: string.isRequired,
		shortId: string.isRequired,
	}).isRequired,
};

export default CurrentCap;
