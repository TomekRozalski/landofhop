import React, { forwardRef, useContext, useEffect } from 'react';
import {
	arrayOf,
	bool,
	func,
	shape,
} from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
import { debounce } from 'lodash';
import { VariableSizeGrid } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import { AppErrorContext } from 'config';
import { getBeveragesList as getBeveragesListAction } from 'store/actions';
import { setContainerHeight } from 'utils';
import { beverageBasics } from 'utils/types';
import { Spinner } from 'elements';
import { ListOfItems, Tile } from './components';

const Tiles = ({
	getBeveragesList,
	isError,
	isLoading,
	list,
}) => {
	const { setAppError } = useContext(AppErrorContext);

	const onScroll = debounce(() => {
		sessionStorage.setItem('tilesPosition', window.pageYOffset || document.documentElement.scrollTop);
	}, 400, { leading: true, maxWait: 1000 });

	const withTitle = children => (
		<>
			{ children }
			<FormattedMessage id="app.fullTitle">
				{title => <Helmet><title>{title}</title></Helmet>}
			</FormattedMessage>
		</>
	);

	useEffect(() => {
		if (list.length < 5) {
			getBeveragesList();
		}
	}, []);

	useEffect(() => {
		const tilesPosition = sessionStorage.getItem('tilesPosition');

		if (tilesPosition) {
			window.scroll(0, tilesPosition);
		}

		window.addEventListener('scroll', onScroll);

		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	}, [list]);

	if (isLoading) {
		return withTitle(<Spinner center />);
	}

	if (isError) {
		setAppError('appError.fetchFailed.beverageList');
		return null;
	}

	const innerElementType = forwardRef((props, ref) => <ListOfItems props={props} ref={ref} />);

	return withTitle(
		<AutoSizer>
			{({ height, width }) => (
				<VariableSizeGrid
					columnCount={5}
					columnWidth={() => 220}
					innerElementType={innerElementType}
					height={height}
					rowCount={Math.ceil(list.length / 5) + 1}
					rowHeight={(i) => {
						const index = i + 1;

						if (index === Math.ceil(list.length / 5) + 1) {
							return 80;
						}

						const listOfContainerSizes = list
							.slice((index * 5) - 5, index * 5)
							.map(({ container }) => setContainerHeight(container));


						return (Math.max(...listOfContainerSizes) + 10);
					}}
					width={width - 60}
					itemData={list}
				>
					{ Tile }
				</VariableSizeGrid>
			)}
		</AutoSizer>,
	);
};

Tiles.propTypes = {
	getBeveragesList: func.isRequired,
	isError: bool.isRequired,
	isLoading: bool.isRequired,
	list: arrayOf(
		shape(beverageBasics),
	).isRequired,
};

const mapStateToProps = ({ beverages }) => ({
	isError: beverages.basics.isError,
	isLoading: beverages.basics.isLoading,
	list: beverages.basics.list,
});

const mapDispatchToProps = {
	getBeveragesList: getBeveragesListAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tiles);
