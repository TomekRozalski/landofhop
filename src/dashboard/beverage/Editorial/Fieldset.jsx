import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { constants } from '../utils';
import { AddButton, SubSection } from '../elements';
import {
	Added,
	Aged,
	AlcoholScope,
	Clarity,
	Color,
	Contract,
	Cooperation,
	DryHopped,
	Fermentation,
	Filtration,
	Notes,
	Pasteurization,
	Place,
	Price,
	Style,
	Updated,
} from '../fragments';
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
			<Aged {...commonProps} fieldName={fields.aged} />
			<DryHopped {...commonProps} fieldName={fields.dryHopped} />
			{/* -------------------------------- */}
			<SubSection title="dashboard.impressionsInfo" />
			<Color {...commonProps} fieldName={fields.color} />
			<Clarity {...commonProps} fieldName={fields.clarity} />
			{/* -------------------------------- */}
			<SubSection title="dashboard.otherInfo" />
			<Price {...commonProps} fieldName={fields.price} />
			<Added {...commonProps} fieldName={fields.added} />
			<Updated {...commonProps} fieldName={fields.updated} />
			<Notes {...commonProps} fieldName={fields.notes} />
		</>
	);
};

Fieldset.propTypes = {
	showSubform: PropTypes.func.isRequired,
};

export default memo(Fieldset);
