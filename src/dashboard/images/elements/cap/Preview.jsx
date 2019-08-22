import React from 'react';
import { shape, string } from 'prop-types';
import styled from 'styled-components';

const Img = styled.img`
	display: block;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 3;
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
