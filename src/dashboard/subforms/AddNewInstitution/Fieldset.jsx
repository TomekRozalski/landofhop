import React, { memo } from 'react';
// import PropTypes from 'prop-types';

import { constants } from 'dashboard/utils';
// import { AddButton, SubSection } from 'dashboard/elements';
import {
	Badge,
	// Name,
	// Series,
	// Brand,
	// Cooperation,
	// Contract,
	// Place,
	// Tale,
	// Barcode,
	// Fermentation,
	// Style,
} from 'dashboard/fragments';

// import {
// 	Badge,
// 	Consortium,
// 	Name,
// 	Website,
// } from './fragments';

import { fields } from './utils';

const Fieldset = () => {
	const commonProps = {
		formName: constants.forms.beverage.label,
		inverse: true,
	};

	return (
		<>
			<Badge {...commonProps} fieldName={fields.badge} />
		</>
	);
};

export default memo(Fieldset);
