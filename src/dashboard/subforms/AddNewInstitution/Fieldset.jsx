import React, { memo } from 'react';

import { constants } from 'dashboard/utils';
import {
	Badge,
	Name,
	Consortium,
	Website,
} from 'dashboard/fragments';
import { fields } from './utils';

const Fieldset = () => {
	const commonProps = {
		formName: constants.forms.beverage.label,
		inverse: true,
	};

	return (
		<>
			<Badge {...commonProps} fieldName={fields.badge} />
			<Name {...commonProps} fieldName={fields.name} />
			<Consortium {...commonProps} fieldName={fields.consortium} />
			<Website {...commonProps} fieldName={fields.website} />
		</>
	);
};

export default memo(Fieldset);
