import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { NavigationContext } from 'config';
import {
	getBeverageDetails as getBeverageDetailsAction,
	removeBeverage,
} from 'store/actions';
import { grid } from 'utils';
import { Spinner } from 'elements';
import { RemoveButton } from './footer/fragments';
import { Gallery, Header } from './index';
import { beverageDetails } from './utils';

const Wrapper = styled.div`
	${grid}
`;

const Details = ({
	getBeverageDetails,
	isError,
	isLoading,
	beverage,
	match: {
		params,
	},
	removeBeverage,
}) => {
	const { token } = useContext(NavigationContext);

	useEffect(() => {
		getBeverageDetails(params);
	}, []);

	const abc = () => {
		if (token) {
			removeBeverage({
				id: beverage.id,
				token,
			});
		} else {
			console.log('brak tokena');
		}
	};

	if (!beverage || isLoading) {
		return <Spinner center />;
	}

	return (
		<Wrapper>
			<Gallery />
			<Header beverage={beverage} />


			<Link to={`/update-beverage/${params.short_id}/${params.brand}/${params.badge}`}>Update beverage</Link>
			<RemoveButton id={beverage.id} />
			<Helmet><title>{`Land of Hop. ${params.brand}. ${params.badge}`}</title></Helmet>
		</Wrapper>
	);
};

Details.propTypes = {
	getBeverageDetails: PropTypes.func.isRequired,
	isError: PropTypes.bool.isRequired,
	isLoading: PropTypes.bool.isRequired,
	beverage: beverageDetails,
	match: PropTypes.shape({
		params: PropTypes.shape({
			badge: PropTypes.string.isRequired,
			brand: PropTypes.string.isRequired,
			short_id: PropTypes.string.isRequired,
		}).isRequired,
	}).isRequired,
	removeBeverage: PropTypes.func.isRequired,
};

Details.defaultProps = {
	beverage: null,
};

const mapStateToProps = ({ beverages }, { match: { params } }) => ({
	isError: beverages.details.isError,
	isLoading: beverages.details.isLoading,
	beverage: beverages.details.list.find(beverage => (
		beverage.badge === params.badge
		&& beverage.label.general.brand.badge === params.brand
		&& beverage.short_id === params.short_id
	)),
});

const mapDispatchToProps = dispatch => bindActionCreators({
	getBeverageDetails: getBeverageDetailsAction,
	removeBeverage,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Details);
