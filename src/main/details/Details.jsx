import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { BeverageDetailsContext, NotificationContext, ScrollPositionContext } from 'config';
import { getBeverageDetails as getBeverageDetailsAction } from 'store/actions';
import { constants, grid } from 'utils';
import { Spinner } from 'elements';
import {
	Admin,
	ControlPanel,
	Gallery,
	Heading,
	Impressions,
	Meta,
	Other,
	Primary,
	Secondary,
	Tale,
} from './index';
import { beverageDetails } from './utils';

const Wrapper = styled.div`
	${grid}
	grid-template-rows: auto auto 1fr auto auto auto;
	margin: 3rem auto;
`;

const Details = ({
	getBeverageDetails,
	isError,
	isLoading,
	savedBeverage,
	match: {
		params,
	},
}) => {
	const { beverage, setBeverage } = useContext(BeverageDetailsContext);
	const { notify } = useContext(NotificationContext);
	const { setScrollPosition } = useContext(ScrollPositionContext);

	if (isError) {
		notify({
			id: 'beverageDetails.fetchFailed',
			type: constants.notify.type.error,
		});

		return null;
	}

	useEffect(() => {
		if (savedBeverage) {
			setBeverage(savedBeverage);
		} else {
			getBeverageDetails(params).then(setBeverage);
		}

		return (() => { setBeverage(null); });
	}, [beverage, params, savedBeverage]);

	useEffect(() => {
		if (savedBeverage) {
			setScrollPosition(savedBeverage.id);
		}
	}, [savedBeverage]);

	if (!beverage || isLoading) {
		return <Spinner center />;
	}

	return (
		<Wrapper>
			<Gallery />
			<Heading />
			<ControlPanel />
			<Primary />
			<Tale />
			<Secondary />
			<Impressions />
			<Other />
			<Admin params={params} />
			<Meta />
		</Wrapper>
	);
};

Details.propTypes = {
	getBeverageDetails: PropTypes.func.isRequired,
	isError: PropTypes.bool.isRequired,
	isLoading: PropTypes.bool.isRequired,
	savedBeverage: beverageDetails,
	match: PropTypes.shape({
		params: PropTypes.shape({
			badge: PropTypes.string.isRequired,
			brand: PropTypes.string.isRequired,
			shortId: PropTypes.string.isRequired,
		}).isRequired,
	}).isRequired,
};

Details.defaultProps = {
	savedBeverage: null,
};

const mapStateToProps = ({ beverages }, { match: { params } }) => ({
	isError: beverages.details.isError,
	isLoading: beverages.details.isLoading,
	savedBeverage: beverages.details.list.find(beverage => (
		beverage.badge === params.badge
		&& beverage.label.general.brand.badge === params.brand
		&& beverage.shortId === params.shortId
	)),
});

const mapDispatchToProps = {
	getBeverageDetails: getBeverageDetailsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
