import React from 'react';
import styled from 'styled-components';

import { fonts } from 'utils/theme';

const Wrapper = styled.div`
	grid-column: 1 / 3;
	margin: 3rem 0;
	font: 500 3rem / 4rem ${fonts.primary};
	text-align: center;
`;

const Gallery = () => {
	console.log('Gallery render');

	return (
		<Wrapper>Gallery</Wrapper>
	);
};

export default Gallery;
