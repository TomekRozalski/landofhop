import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { constants } from 'dashboard/utils';
import { AddButton, SubSection } from 'dashboard/elements';
import {
	Aged,
	Contract,
	Cooperation,
	DryHopped,
	Fermentation,
	Filtration,
	Pasteurization,
	Place,
	Price,
	Refermentation,
	Style,
} from 'dashboard/fragments';
import { fields } from './utils';

const Fieldset = ({ showSubform }) => {
	const commonProps = {
		formName: constants.forms.beverage.editorial,
		showSubform,
	};

	return (
		<>
			{/* <Badge {...commonProps} fieldName={fields.badge} /> */}
			{/* -------------------------------- */}
			<SubSection title="dashboard.brandInfo" />
			{/* <Name {...commonProps} fieldName={fields.name} /> */}
			{/* <Series {...commonProps} fieldName={fields.series} /> */}
			{/* <Brand {...commonProps} fieldName={fields.brand} /> */}
			<Cooperation {...commonProps} fieldName={fields.cooperation} />
			<AddButton onClick={() => { showSubform(constants.forms.institution); }} />
			<Contract {...commonProps} fieldName={fields.contract} />
			<Place {...commonProps} fieldName={fields.place} />
			<AddButton onClick={() => { showSubform(constants.forms.place); }} />
			{/* <Tale {...commonProps} fieldName={fields.tale} /> */}
			{/* <Barcode {...commonProps} fieldName={fields.barcode} /> */}
			{/* -------------------------------- */}
			<SubSection title="dashboard.brewingInfo" />
			<Fermentation {...commonProps} fieldName={fields.fermentation} />
			<Style {...commonProps} fieldName={fields.style} />
			{/* <Extract {...commonProps} fieldName={fields.extract} /> */}
			{/* <Alcohol {...commonProps} fieldName={fields.alcohol} /> */}
			{/* AlcoholScope */}
			<Filtration {...commonProps} fieldName={fields.filtration} />
			<Pasteurization {...commonProps} fieldName={fields.pasteurization} />
			<Refermentation {...commonProps} fieldName={fields.refermentation} />
			<Aged {...commonProps} fieldName={fields.aged} />
			<DryHopped {...commonProps} fieldName={fields.dryHopped} />
			{/* <ExpirationDate {...commonProps} fieldName={fields.expirationDate} /> */}
			{/* -------------------------------- */}
			<SubSection title="dashboard.impressionsInfo" />
			{/* Color */}
			{/* Clarity */}
			{/* -------------------------------- */}
			<SubSection title="dashboard.otherInfo" />
			{/* <Container {...commonProps} fieldName={fields.container} /> */}
			<Price {...commonProps} fieldName={fields.price} />
			{/* Added */}
			{/* Updated */}
		</>
	);
};

Fieldset.propTypes = {
	showSubform: PropTypes.func.isRequired,
};

export default memo(Fieldset);
