import React, { useContext, useEffect } from 'react';
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
import { MainHeader, SubSection, Wrapper } from 'dashboard/common/elements';
import { Cap, Cover, Gallery } from './fragments';

const UpdateBeverageImages = ({
	getBeverageDetails,
	isError,
	isLoading,
	match: { params },
	savedBeverage,
}) => {
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
		<>
			<MainHeader title="dashboard.updateBeverageImages.title" />
			<Wrapper>
				<SubSection title="dashboard.updateBeverageImages.gallery" />
				<Gallery params={params} savedBeverage={savedBeverage} />
				<SubSection
					position="cover"
					title="dashboard.updateBeverageImages.cover"
				/>
				<Cover params={params} />
				<SubSection
					position="cap"
					title="dashboard.updateBeverageImages.cap"
				/>
				<Cap params={params} savedBeverage={savedBeverage} />
			</Wrapper>
		</>
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
