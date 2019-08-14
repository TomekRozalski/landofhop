import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import styled from 'styled-components';

import Thumbnail from './Thumbnail';

const Wrapper = styled.ul`
	display: flex;
	flex-wrap: wrap;
`;

const ThumbnailList = ({ files }) => (
	<Wrapper>
		{ files.map(file => <Thumbnail key={file.path} file={file} />) }
	</Wrapper>
);

ThumbnailList.propTypes = {
	files: arrayOf(
		shape({
			path: string.isRequired,
			preview: string.isRequired,
		}).isRequired,
	).isRequired,
};

export default ThumbnailList;
