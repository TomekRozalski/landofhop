import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import {
	arrayOf,
	bool,
	func,
	shape,
} from 'prop-types';
import { connect } from 'react-redux';

import { getBeveragesList as getBeveragesListAction } from 'store/actions';
import { BeverageDetailsContext } from 'config';
import { colors } from 'utils/theme';
import { beverageBasics } from '../../../tiles/utils';

const Example = styled.div`
	width: 100%;
	height: 10rem;
	margin-bottom: 2rem;
	border: 4px solid ${colors.success.strong};
`;

const Navigation = ({
	getBeveragesList,
	isError,
	isLoading,
	list,
}) => {
	const { beverage } = useContext(BeverageDetailsContext);

	if (list.length >= 5 && !isLoading && !isError) {
		const num = list.findIndex(item => item.id === beverage.id);
		console.log('num', num);
	}

	useEffect(() => {
		if (list.length < 5) {
			getBeveragesList();
		}
	}, []);

	return (
		<Example />
	);
};

Navigation.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
