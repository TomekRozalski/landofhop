import React, { useEffect, useState } from 'react';
import {
	bool,
	func,
	shape,
	string,
} from 'prop-types';
import { connect } from 'react-redux';

import { getBeverageDetails as getBeverageDetailsAction } from 'store/actions';
import { Spinner } from 'elements';
import { BeverageFormWrapper } from './utils';
import Label from './Label';
import Producer from './Producer';
import Editorial from './Editorial';
import updateBeverage from './utils/api/updateBeverage';
import {
	Label as labelNormalizer,
	Producer as producerNormalizer,
	Editorial as editorialNormalizer,
} from './utils/normalizers/fromResponse';

const UpdateBeverage = ({
	beverage,
	getBeverageDetails,
	// isError,
	isLoading,
	match: {
		params,
	},
}) => {
	const [isBeverageProcessing, setIsBeverageProcessing] = useState(true);
	const [update, setUpdate] = useState({});

	useEffect(() => {
		if (beverage) {
			setIsBeverageProcessing(false);

			const labelValues = labelNormalizer(beverage);
			const producerValues = producerNormalizer(beverage);
			const editorialValues = editorialNormalizer(beverage);

			setUpdate({
				label: labelValues,
				producer: producerValues,
				editorial: editorialValues,
			});
		} else {
			getBeverageDetails(params);
		}
	}, [beverage]);

	if (isLoading || isBeverageProcessing) {
		return <Spinner center />;
	}

	return (
		<BeverageFormWrapper>
			{({
				getBeveragesList,
				moveBack,
				moveOn,
				push,
				savedForms,
				saveFormValues,
				setAppError,
				setReadyToUnmount,
				setTitle,
				showSubform,
				step,
				title,
				token,
			}) => {
				if (!title) {
					setTitle('dashboard.updateBeverage.title');
				}

				const finalSubmit = updateBeverage({
					getBeverageDetails,
					getBeveragesList,
					push,
					savedForms,
					setAppError,
					setReadyToUnmount,
					token,
				});

				const commonProps = {
					moveBack,
					moveOn,
					savedForms,
					saveFormValues,
					showSubform,
					update,
				};

				return (
					<>
						{ step === 1 && <Label {...commonProps} /> }
						{ step === 2 && <Producer {...commonProps} /> }
						{ step === 3 && <Editorial {...commonProps} finalSubmit={finalSubmit} /> }
					</>
				);
			}}
		</BeverageFormWrapper>
	);
};

const mapStateToProps = ({ beverages }, { match: { params } }) => ({
	isError: beverages.details.isError,
	isLoading: beverages.details.isLoading,
	beverage: beverages.details.list.find(beverage => (
		beverage.badge === params.badge
		&& beverage.label.general.brand.badge === params.brand
		&& beverage.shortId === params.shortId
	)),
});

const mapDispatchToProps = {
	getBeverageDetails: getBeverageDetailsAction,
};

UpdateBeverage.propTypes = {
	beverage: shape({}),
	getBeverageDetails: func.isRequired,
	isError: bool.isRequired,
	isLoading: bool.isRequired,
	match: shape({
		params: shape({
			badge: string.isRequired,
			brand: string.isRequired,
			shortId: string.isRequired,
		}).isRequired,
	}).isRequired,
};

UpdateBeverage.defaultProps = {
	beverage: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateBeverage);
