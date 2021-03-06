import React, { memo } from 'react';
import { bool, func } from 'prop-types';

import { constants } from '../utils';
import { AddButton, SubSection } from '../elements';
import {
	Aged,
	Alcohol,
	Badge,
	Barcode,
	Bitterness,
	Brand,
	Container,
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
	Name,
	Pasteurization,
	Place,
	Power,
	Price,
	Series,
	SmokedMalt,
	Style,
	Sweetness,
	Tale,
	Temperature,
} from '../fragments';
import { fields } from './utils';

const Fieldset = ({ showSubform, update }) => {
	const commonProps = {
		formName: constants.forms.beverage.label,
		showSubform,
	};

	return (
		<>
			<Badge {...commonProps} fieldName={fields.badge} disabled={update} />
			{/* -------------------------------- */}
			<SubSection title="dashboard.brandInfo" />
			<Name {...commonProps} fieldName={fields.name} />
			<Series {...commonProps} fieldName={fields.series} />
			<Brand {...commonProps} fieldName={fields.brand} disabled={update} />
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
			<Container {...commonProps} fieldName={fields.container} />
			<Price {...commonProps} fieldName={fields.price} />
		</>
	);
};

Fieldset.propTypes = {
	showSubform: func.isRequired,
	update: bool.isRequired,
};

export default memo(Fieldset);
