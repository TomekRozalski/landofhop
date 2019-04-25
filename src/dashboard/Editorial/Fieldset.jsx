import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { constants } from 'dashboard/utils';
import { AddButton, SubSection } from 'dashboard/elements';
import {
	Aged,
	AlcoholScope,
	Color,
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
			<SubSection title="dashboard.brandInfo" />
			<Cooperation {...commonProps} fieldName={fields.cooperation} />
			<AddButton onClick={() => { showSubform(constants.forms.institution); }} />
			<Contract {...commonProps} fieldName={fields.contract} />
			<Place {...commonProps} fieldName={fields.place} />
			<AddButton onClick={() => { showSubform(constants.forms.place); }} />
			{/* -------------------------------- */}
			<SubSection title="dashboard.brewingInfo" />
			<Fermentation {...commonProps} fieldName={fields.fermentation} />
			<Style {...commonProps} fieldName={fields.style} />
			<AlcoholScope {...commonProps} fieldName={fields.alcoholScope} />
			<Filtration {...commonProps} fieldName={fields.filtration} />
			<Pasteurization {...commonProps} fieldName={fields.pasteurization} />
			<Refermentation {...commonProps} fieldName={fields.refermentation} />
			<Aged {...commonProps} fieldName={fields.aged} />
			<DryHopped {...commonProps} fieldName={fields.dryHopped} />
			{/* -------------------------------- */}
			<SubSection title="dashboard.impressionsInfo" />
			<Color {...commonProps} fieldName={fields.color} />
			{/* Clarity */}
			{/* -------------------------------- */}
			<SubSection title="dashboard.otherInfo" />
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
