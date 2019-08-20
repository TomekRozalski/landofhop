import React from 'react';
import { shape, string } from 'prop-types';
import styled from 'styled-components';

const Img = styled.img`
	display: block;
	width: 100%;
`;

const Preview = ({ file }) => (
	<Img alt={file.path} src={file.preview} />
);

Preview.propTypes = {
	file: shape({
		path: string.isRequired,
		preview: string.isRequired,
	}).isRequired,
};

export default Preview;
