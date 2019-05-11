import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { constants } from 'dashboard/utils';
import { AddButton, SubSection } from 'dashboard/elements';
import {
	Aged,
	Alcohol,
	Bitterness,
	Contract,
	Cooperation,
	DryHopped,
	ExpirationDate,
	Extract,
	Fermentation,
	Filtration,
	Fullness,
	Hoppyness,
	Ingredients,
	IngredientsList,
	Pasteurization,
	Place,
	Power,
	Price,
	Refermentation,
	Series,
	SmokedMalt,
	Style,
	Sweetness,
	Tale,
	Temperature,
} from 'dashboard/fragments';
import { fields } from './utils';

const Fieldset = ({ showSubform }) => {
	const commonProps = {
		formName: constants.forms.beverage.producer,
		showSubform,
	};

	return (
		<>
			<SubSection title="dashboard.brandInfo" />
			<Series {...commonProps} fieldName={fields.series} />
			<Cooperation {...commonProps} fieldName={fields.cooperation} />
			<AddButton onClick={() => { showSubform(constants.forms.institution); }} />
			<Contract {...commonProps} fieldName={fields.contract} />
			<Place {...commonProps} fieldName={fields.place} />
			<AddButton onClick={() => { showSubform(constants.forms.place); }} />
			<Tale {...commonProps} fieldName={fields.tale} />
			{/* -------------------------------- */}
			<SubSection title="dashboard.brewingInfo" />
			<Fermentation {...commonProps} fieldName={fields.fermentation} />
			<Style {...commonProps} fieldName={fields.style} />
			<Extract {...commonProps} fieldName={fields.extract} />
			<Alcohol {...commonProps} fieldName={fields.alcohol} />
			<Filtration {...commonProps} fieldName={fields.filtration} />
			<Pasteurization {...commonProps} fieldName={fields.pasteurization} />
			<Refermentation {...commonProps} fieldName={fields.refermentation} />
			<Aged {...commonProps} fieldName={fields.aged} />
			<DryHopped {...commonProps} fieldName={fields.dryHopped} />
			<ExpirationDate {...commonProps} fieldName={fields.expirationDate} />
			{/* -------------------------------- */}
			<SubSection title="dashboard.ingredientsInfo" />
			<Ingredients {...commonProps} fieldName={fields.ingredients} />
			<IngredientsList {...commonProps} fieldName={fields.ingredientsList} />
			<AddButton onClick={() => { showSubform(constants.forms.ingredient); }} />
			<SmokedMalt {...commonProps} fieldName={fields.smokedMalt} />
			{/* -------------------------------- */}
			<SubSection title="dashboard.impressionsInfo" />
			<Bitterness {...commonProps} fieldName={fields.bitterness} />
			<Sweetness {...commonProps} fieldName={fields.sweetness} />
			<Fullness {...commonProps} fieldName={fields.fullness} />
			<Power {...commonProps} fieldName={fields.power} />
			<Hoppyness {...commonProps} fieldName={fields.hoppyness} />
			<Temperature {...commonProps} fieldName={fields.temperature} />
			{/* -------------------------------- */}
			<SubSection title="dashboard.otherInfo" />
			<Price {...commonProps} fieldName={fields.price} />
		</>
	);
};

Fieldset.propTypes = {
	showSubform: PropTypes.func.isRequired,
};

export default memo(Fieldset);
