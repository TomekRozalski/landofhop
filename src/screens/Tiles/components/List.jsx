import React from 'react';
import { object, shape } from 'prop-types';
import styled from 'styled-components';

import { sizes } from 'utils/theme';

const StyledList = styled.ul`
	${({ style }) => style}
	width: ${sizes.tiles.column.width * 5 + sizes.tiles.column.padding * 4}px;
	margin: 0 auto;
	padding: ${sizes.tiles.padding.top}px 0 ${sizes.tiles.padding.bottom}px 0;
	position: relative;
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
