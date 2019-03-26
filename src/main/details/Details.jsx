import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { BeverageDetailsContext } from 'config';
import { getBeverageDetails as getBeverageDetailsAction } from 'store/actions';
import { grid } from 'utils';
import { Spinner } from 'elements';
import { Admin, Gallery, Heading } from './index';
import { beverageDetails } from './utils';

const Wrapper = styled.div`
	${grid}
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

	useEffect(() => {
		if (savedBeverage) {
			setBeverage(savedBeverage);
		} else {
			getBeverageDetails(params).then(setBeverage);
		}

		return (() => { setBeverage(null); });
	}, []);

	if (!beverage || isLoading) {
		return <Spinner center />;
	}

	return (
		<Wrapper>
			<Gallery />
			<Heading />

			{/*

				<Navigation />
				<Obverse />
				<Tale />
				<Reverse />
				<Other />

			*/}

			<Admin />
			<Helmet><title>{`Land of Hop. ${params.brand}. ${params.badge}`}</title></Helmet>
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

const mapDispatchToProps = dispatch => bindActionCreators({
	getBeverageDetails: getBeverageDetailsAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Details);
