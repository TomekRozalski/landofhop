import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { get } from 'lodash';

const Viewer = styled.div`
	width: 100%;
	background-color: ${({ color }) => color};
`;

const ColorPreview = ({ field, form }) => {
	const { name, value } = field;
	const error = get(form, ['errors', name]);

	return error ? null : <Viewer color={value} />;
};

ColorPreview.propTypes = {
	field: PropTypes.shape({
		name: PropTypes.string.isRequired,
		value: PropTypes.string,
	}).isRequired,
	form: PropTypes.shape({
		errors: PropTypes.shape({}).isRequired,
	}).isRequired,
};

export default ColorPreview;
