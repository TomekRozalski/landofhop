import React, { useContext, useEffect } from 'react';
import {
	arrayOf,
	bool,
	func,
	shape,
} from 'prop-types';
import { connect } from 'react-redux';
import AutoSizer from 'react-virtualized-auto-sizer';

import { NotificationContext } from 'config';
import { getBeveragesList as getBeveragesListAction } from 'store/actions';
import { constants } from 'utils';
import { beverageBasics } from 'utils/types';
import { Spinner, WithTitle } from 'elements';
import ListWrapper from './components/ListWrapper';

const Tiles = ({
	getBeveragesList,
	isError,
	isLoading,
	list,
}) => {
	const { notify } = useContext(NotificationContext);

	useEffect(() => {
		if (!list.length) {
			getBeveragesList();
		}
	}, []);

	if (isError) {
		notify({
			id: 'beverageList.fetchFailed',
			type: constants.notify.type.error,
		});

		return null;
	}

	return (
		<WithTitle title="app.fullTitle">
			{ isLoading
				? <Spinner center />
				: (
					<AutoSizer>
						{dimension => <ListWrapper dimension={dimension} list={list} />}
					</AutoSizer>
				)
			}
		</WithTitle>
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
