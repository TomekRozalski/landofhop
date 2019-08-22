import React, { useContext, useEffect, useState } from 'react';
import {
	bool,
	func,
	number,
	shape,
	string,
} from 'prop-types';
import { connect } from 'react-redux';
import get from 'lodash/get';
import isNil from 'lodash/isNil';

import { AppErrorContext } from 'config';
import { Spinner } from 'elements';
import { getBeverageDetails as getBeverageDetailsAction } from 'store/actions';
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
	savedBeverage: shape({
		id: string.isRequired,
		gallery: number,
		cap: bool,
	}),
};

UpdateBeverageImages.defaultProps = {
	savedBeverage: null,
};

const mapStateToProps = ({ beverages }, { match: { params } }) => {
	const beverageToChange = beverages.details.list.find(beverage => (
		beverage.badge === params.badge
		&& beverage.label.general.brand.badge === params.brand
		&& beverage.shortId === params.shortId
	));

	const id = get(beverageToChange, 'id');
	const gallery = get(beverageToChange, 'editorial.images', 0);
	const cap = get(beverageToChange, 'editorial.cap', false);

	const savedBeverage = (!isNil(id) && !isNil(gallery) && !isNil(cap))
		? { id, gallery, cap }
		: null;

	return {
		isError: beverages.details.isError,
		isLoading: beverages.details.isLoading,
		savedBeverage,
	};
};

const mapDispatchToProps = {
	getBeverageDetails: getBeverageDetailsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateBeverageImages);
