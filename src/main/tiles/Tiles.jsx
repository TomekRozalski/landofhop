import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import {
	arrayOf,
	bool,
	func,
	shape,
} from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';

import { AppErrorContext } from 'config';
import { getBeveragesList as getBeveragesListAction } from 'store/actions';
import { grid } from 'utils';
import { Spinner } from 'elements';
import { beverageBasics } from './utils';
import { Tile } from './fragments';

const List = styled.ul`
	${grid}
`;

const Tiles = ({
	getBeveragesList,
	isError,
	isLoading,
	list,
}) => {
	const { setAppError } = useContext(AppErrorContext);

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

	if (isLoading) {
		return withTitle(<Spinner center />);
	}

	if (isError) {
		setAppError('appError.fetchFailed.beverageList');
		return null;
	}

	return withTitle(
		<List>{ list.map(props => <Tile key={props.id} {...props} />) }</List>,
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

const mapDispatchToProps = dispatch => bindActionCreators({
	getBeveragesList: getBeveragesListAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Tiles);
