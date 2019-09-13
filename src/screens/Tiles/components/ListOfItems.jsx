import React from 'react';
import { object, shape } from 'prop-types';

const ListOfItems = ({ props: { style, ...rest }, ref }) => (
	<ul
		ref={ref}
		style={{
			...style,
			width: 220 * 5 + 40,
			margin: '0px auto',
			position: 'relative',
			padding: '20px 0 60px 0',
		}}
		{...rest}
	/>
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
