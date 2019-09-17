import React, { forwardRef, useEffect, useRef } from 'react';
import { arrayOf, number, shape } from 'prop-types';
import { VariableSizeList } from 'react-window';
import styled from 'styled-components';
import debounce from 'lodash/debounce';

import { setContainerHeight } from 'utils';
import { beverageBasics } from 'utils/types';
import { List, Row } from './index';

const HiddenButton = styled.button`
	display: none;
`;

const TilesWrapper = ({ dimension, list }) => {
	const button = useRef();
	const gridRef = useRef();

	// const onScroll = debounce(() => {
	// 	// sessionStorage.setItem('tilesPosition', window.pageYOffset || document.documentElement.scrollTop);
	// 	console.log('gridRef', gridRef);
	// }, 400, { leading: true, maxWait: 1000 });

	const scrollToRow100Column50Auto = () => {
		gridRef.current.scrollToItem(5, 'start');
	};

	useEffect(() => {
		// const tilesPosition = sessionStorage.getItem('tilesPosition');

		// if (tilesPosition) {
		// 	window.scroll(0, tilesPosition);
		// }
		// console.log('gridRef', gridRef.current);
		// setTimeout(scrollToRow100Column50Auto, 3000);

		button.current.click();

		console.log('gridRef', gridRef);

		// gridRef.current._onScroll = (o) => {
		// 	console.log('0', o);
		// 	console.log('sdf', o.scrollTop);
		// };

		// window.addEventListener('scroll', onScroll);

		// return () => {
		// 	window.removeEventListener('scroll', onScroll);
		// };
	}, [list]);

	const innerElementType = forwardRef((props, ref) => <List props={props} ref={ref} />);

	return (
		<>
			<HiddenButton
				ref={button}
				onClick={scrollToRow100Column50Auto}
			/>
			<VariableSizeList
				height={dimension.height}
				innerElementType={innerElementType}
				itemCount={Math.ceil(list.length / 5) + 1}
				itemData={list}
				itemSize={(i) => {
					const index = i + 1;

					if (index === Math.ceil(list.length / 5) + 1) {
						return 80;
					}

					const listOfContainerSizes = list
						.slice((index * 5) - 5, index * 5)
						.map(({ container }) => setContainerHeight(container));


					return (Math.max(...listOfContainerSizes) + 10);
				}}
				width={dimension.width - 60}
				ref={gridRef}
			>
				{ Row }
			</VariableSizeList>
		</>
	);
};

TilesWrapper.propTypes = {
	dimension: shape({
		height: number.isRequired,
		width: number.isRequired,
	}).isRequired,
	list: arrayOf(
		shape(beverageBasics),
	).isRequired,
};

export default TilesWrapper;
