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
} from './fragments';

const Fieldset = ({ showSubform }) => {
	const commonProps = {
		formName: constants.forms.beverage.label,
		showSubform,
	};

	return (
		<>
			<Badge {...commonProps} />
			{/* -------------------------------- */}
			<SubSection title="dashboard.brandInfo" />
			<Name {...commonProps} />
			<Series {...commonProps} />
			<Brand {...commonProps} />
			{/* <AddButton onClick={() => { showSubform(Forms.INSTITUTION) }} /> */}
			<Cooperation {...commonProps} />
			{/* <Contract {...formikProps} /> */}
		</>
	);
};

Fieldset.propTypes = {
	showSubform: PropTypes.func.isRequired,
};

export default memo(Fieldset);
