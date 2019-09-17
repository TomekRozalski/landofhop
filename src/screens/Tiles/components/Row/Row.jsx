import React from 'react';
import { arrayOf, number, shape } from 'prop-types';

import { beverageBasics } from 'utils/types';
import Tile from '../Tile';
import { RowGrid } from './elements';

const Row = ({ data, index, style }) => {
	const begin = index ? index * 5 : 0;
	const end = index ? index * 5 + 5 : 5;

	const rowData = data.slice(begin, end);

	if (!rowData.length) {
		return null;
	}

	return (
		<RowGrid style={style}>
			{ rowData.map(props => <Tile {...props} />)}
		</RowGrid>
	);
};

Row.propTypes = {
	data: arrayOf(shape(beverageBasics)).isRequired,
	index: number.isRequired,
	style: shape({}).isRequired,
};

export default Row;
