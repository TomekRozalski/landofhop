import React from 'react';
import { object, shape } from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.ul`
	${({ forwardedStyle }) => forwardedStyle}
	width: ${220 * 5 + 60}px;
	margin: 0px auto;
	position: relative;
	padding: 20px 0 60px 0;
`;

const List = ({ props: { style, ...rest }, ref }) => (
	<Wrapper ref={ref} forwardedStyle={style} {...rest} />
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
