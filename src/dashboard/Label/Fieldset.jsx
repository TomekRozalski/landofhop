import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { constants } from 'dashboard/utils';
import { SubSection } from 'dashboard/elements';
import {
	Badge,
	Name,
	Series,
	Brand,
	Cooperation,
	Contract,
	Place,
	Tale,
	Barcode,
	Fermentation,
	Style,
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
			{/* <AddButton onClick={() => { showSubform(Forms.INSTITUTION) }} /> */}
			<Cooperation {...commonProps} fieldName={fields.cooperation} />
			<Contract {...commonProps} fieldName={fields.contract} />
			<Place {...commonProps} fieldName={fields.place} />
			{/* <AddButton onClick={() => { showSubform(Forms.PLACE) }} /> */}
			<Tale {...commonProps} fieldName={fields.tale} />
			<Barcode {...commonProps} fieldName={fields.barcode} />
			{/* -------------------------------- */}
			<SubSection title="dashboard.brewingInfo" />
			<Fermentation {...commonProps} fieldName={fields.fermentation} />
			<Style {...commonProps} fieldName={fields.style} />
		</>
	);
};

Fieldset.propTypes = {
	showSubform: PropTypes.func.isRequired,
};

export default memo(Fieldset);
