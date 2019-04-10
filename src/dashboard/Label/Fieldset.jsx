import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { constants } from 'dashboard/utils';
import { AddButton, SubSection } from 'dashboard/elements';
import {
	Aged,
	Alcohol,
	Badge,
	Barcode,
	Bitterness,
	Brand,
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
	IngredientsComplete,
	IngredientsList,
	Name,
	Pasteurization,
	Place,
	Power,
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
		formName: constants.forms.beverage.label,
		showSubform,
	};

	return (
		<>
			<Badge {...commonProps} fieldName={fields.badge} />
			{/* -------------------------------- */}
			<SubSection title="dashboard.brandInfo" />
			<Name {...commonProps} fieldName={fields.name} />
			<Series {...commonProps} fieldName={fields.series} />
			<Brand {...commonProps} fieldName={fields.brand} />
			<AddButton onClick={() => { showSubform(constants.forms.institution); }} />
			<Cooperation {...commonProps} fieldName={fields.cooperation} />
			<Contract {...commonProps} fieldName={fields.contract} />
			<Place {...commonProps} fieldName={fields.place} />
			<AddButton onClick={() => { showSubform(constants.forms.place); }} />
			<Tale {...commonProps} fieldName={fields.tale} />
			<Barcode {...commonProps} fieldName={fields.barcode} />
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
			<Ingredients
				{...commonProps}
				fieldName={fields.ingredients}
				resetWhenEmpty={fields.areIngredientsComplete}
			/>
			<IngredientsList {...commonProps} fieldName={fields.ingredientsList} />
			<AddButton onClick={() => { showSubform(constants.forms.ingredient); }} />
			<IngredientsComplete {...commonProps} fieldName={fields.areIngredientsComplete} />
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
			{/* <SubSection title="dashboard.otherInfo" /> */}
			{/* <Container {...commonProps} /> */}
			{/* <Price {...commonProps} /> */}
		</>
	);
};

Fieldset.propTypes = {
	showSubform: PropTypes.func.isRequired,
};

export default memo(Fieldset);
