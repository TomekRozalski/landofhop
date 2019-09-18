import React from 'react';
import { object, shape } from 'prop-types';
import styled from 'styled-components';

const List = styled.ul`
	${({ style }) => style}
	width: ${220 * 5 + 40}px;
	margin: 0px auto;
	position: relative;
	padding: 20px 0 60px 0;
`;

const ListOfItems = ({ props: { style, ...rest }, ref }) => (
	<List ref={ref} style={style} {...rest} />
);

ListOfItems.propTypes = {
	props: shape({
		style: object.isRequired,
	}).isRequired,
	ref: shape({}),
};

ListOfItems.defaultProps = {
	ref: null,
};

export default ListOfItems;
