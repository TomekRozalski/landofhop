import React, { useContext, useEffect, useState } from 'react';
import {
	bool,
	func,
	shape,
	string,
} from 'prop-types';
import { connect } from 'react-redux';

import { AppErrorContext } from 'config';
import { Spinner } from 'elements';
import { getBeverageDetails as getBeverageDetailsAction } from 'store/actions';
import { beverageDetails } from 'main/details/utils';
import { MainHeader, Wrapper } from 'dashboard/common/elements';
import { ErrorBox, MoveToDetails, Other } from './elements/common';
import { Cap, Cover, Gallery } from './fragments';

const UpdateBeverageImages = ({
	getBeverageDetails,
	isError,
	isLoading,
	match: { params },
	savedBeverage,
}) => {
	const [errors, setErrors] = useState([]);
	const { setAppError } = useContext(AppErrorContext);

	useEffect(() => {
		if (!savedBeverage) {
			getBeverageDetails(params);
		}
	}, [savedBeverage]);

	if (isError) {
		setAppError('appError.fetchFailed.beverageDetails');
		return null;
	}

	if (!savedBeverage || isLoading) {
		return <Spinner center />;
	}

	return (
		<Wrapper>
			<MainHeader title="dashboard.updateBeverageImages.title" />
			<Cover params={params} setErrors={setErrors} />
			<Cap params={params} savedBeverage={savedBeverage} setErrors={setErrors} />
			<Other>
				{ errors.length > 0 ? <ErrorBox errors={errors} /> : <div /> }
				<MoveToDetails params={params} />
			</Other>
			<Gallery params={params} savedBeverage={savedBeverage} setErrors={setErrors} />
		</Wrapper>
	);
};

UpdateBeverageImages.propTypes = {
	getBeverageDetails: func.isRequired,
	isError: bool.isRequired,
	isLoading: bool.isRequired,
	match: shape({
		params: shape({
			badge: string.isRequired,
			brand: string.isRequired,
			shortId: string.isRequired,
		}),
	}).isRequired,
	savedBeverage: beverageDetails,
};

UpdateBeverageImages.defaultProps = {
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

export default connect(mapStateToProps, mapDispatchToProps)(UpdateBeverageImages);
