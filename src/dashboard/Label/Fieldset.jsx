import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { constants } from 'dashboard/utils';
import { AddButton, SubSection } from 'dashboard/elements';
import {
	Aged,
	Alcohol,
	Badge,
	Barcode,
	Brand,
	Contract,
	Cooperation,
	DryHopped,
	ExpirationDate,
	Extract,
	Fermentation,
	Filtration,
	Ingredients,
	IngredientsComplete,
	IngredientsList,
	Name,
	Pasteurization,
	Place,
	Refermentation,
	Series,
	SmokedMalt,
	Style,
	Tale,
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
			{/* <AddButton onClick={() => { showSubform(Forms.INGREDIENT) }} /> */}
			<IngredientsComplete {...commonProps} fieldName={fields.areIngredientsComplete} />
			<SmokedMalt {...commonProps} fieldName={fields.smokedMalt} />
			{/* -------------------------------- */}
			{/* <SubSection title="dashboard.impressionsInfo" /> */}
			{/* <Bitterness {...commonProps} /> */}
			{/* <Sweetness {...commonProps} /> */}
			{/* <Fullness {...commonProps} /> */}
			{/* <Power {...commonProps} /> */}
			{/* <Hoppyness {...commonProps} /> */}
			{/* <Temperature {...commonProps} /> */}
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
