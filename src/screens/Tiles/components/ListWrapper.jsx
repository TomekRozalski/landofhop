import React, {
	forwardRef,
	useContext,
	useEffect,
	useRef,
} from 'react';
import { arrayOf, number, shape } from 'prop-types';
import { VariableSizeGrid } from 'react-window';
import styled from 'styled-components';

import { ScrollPositionContext } from 'config';
import { setContainerHeight } from 'utils';
import { beverageBasics } from 'utils/types';
import { sizes } from 'utils/theme';
import { List, Tile } from './index';

const HiddenButton = styled.button`
	display: none;
`;

const ListWrapper = ({ dimension, list }) => {
	const button = useRef();
	const gridRef = useRef();

	const { scrollPosition } = useContext(ScrollPositionContext);

	const scrollToRow = () => {
		const indexOfNewBeverage = list.findIndex(({ id }) => id === scrollPosition);
		const rowIndex = Math.floor(indexOfNewBeverage / 5);

		gridRef.current.scrollToItem({
			align: 'start',
			rowIndex,
		});
	};

	useEffect(() => {
		if (scrollPosition) {
			button.current.click();
		}
	}, [list]);

	const innerElementType = forwardRef((props, ref) => <List props={props} ref={ref} />);

	return (
		<>
			<HiddenButton
				ref={button}
				onClick={scrollToRow}
			/>
			<VariableSizeGrid
				columnCount={5}
				columnWidth={() => sizes.tiles.column.width}
				innerElementType={innerElementType}
				height={dimension.height + sizes.container.border.width}
				ref={gridRef}
				rowCount={Math.ceil(list.length / 5) + 1}
				rowHeight={(i) => {
					const index = i + 1;

					if (index === Math.ceil(list.length / 5) + 1) {
						return sizes.tiles.padding.bottom;
					}

					const listOfContainerSizes = list
						.slice((index * 5) - 5, index * 5)
						.map(({ container }) => setContainerHeight(container));

					return (Math.max(...listOfContainerSizes) + sizes.tiles.padding.top);
				}}
				style={{ marginLeft: sizes.container.border.width }}
				width={dimension.width - (sizes.container.border.width * 2)}
				itemData={list}
			>
				{ Tile }
			</VariableSizeGrid>
		</>
	);
};

ListWrapper.propTypes = {
	dimension: shape({
		height: number.isRequired,
		width: number.isRequired,
	}).isRequired,
	list: arrayOf(
		shape(beverageBasics),
	).isRequired,
};

export default ListWrapper;
