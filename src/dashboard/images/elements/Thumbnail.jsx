import React from 'react';
import { shape, string } from 'prop-types';
import styled from 'styled-components';

import { colors, fonts } from 'utils/theme';

const Wrapper = styled.li`
	width: calc(10% - 1rem);
	border: 2px dashed ${colors.gray[400]};
    margin: .5rem;

	img { width: 100%; }
`;

const FileName = styled.div`
	margin: 1rem .5rem;
	font: 400 1.2rem / 1 ${fonts.primary};
	text-align: center;
`;

const Thumbnail = ({ file }) => (
	<Wrapper>
		<img alt={file.path} src={file.preview} />
		<FileName>{file.path}</FileName>
	</Wrapper>
);

Thumbnail.propTypes = {
	file: shape({
		path: string.isRequired,
		preview: string.isRequired,
	}).isRequired,
};

export default Thumbnail;
