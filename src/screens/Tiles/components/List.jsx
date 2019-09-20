import React from 'react';
import { object, shape } from 'prop-types';
import styled from 'styled-components';

const StyledList = styled.ul`
	${({ style }) => style}
	width: ${220 * 5 + 40}px;
	margin: 0px auto;
	position: relative;
	padding: 20px 0 60px 0;
`;

const List = ({ props: { style, ...rest }, ref }) => (
	<StyledList ref={ref} style={style} {...rest} />
);

List.propTypes = {
	props: shape({
		style: object.isRequired,
	}).isRequired,
	ref: shape({}),
};

List.defaultProps = {
	ref: null,
};

export default List;
