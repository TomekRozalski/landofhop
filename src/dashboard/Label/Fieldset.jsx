import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { constants } from 'dashboard/utils';
import { SubSection } from 'dashboard/elements';
import {
	Badge,
	Name,
	Series,
} from './fragments';

const Fieldset = ({ showSubform }) => {
	console.log('Fieldset renders');

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
		</>
	);
};

Fieldset.propTypes = {
	showSubform: PropTypes.func.isRequired,
};

export default memo(Fieldset);
