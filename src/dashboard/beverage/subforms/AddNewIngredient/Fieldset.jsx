import React, { memo } from 'react';

import { constants } from '../../utils';
import { Badge, Name, Type } from '../../fragments';
import { fields } from './utils';

const Fieldset = () => {
	const commonProps = {
		formName: constants.forms.ingredient,
		inverse: true,
	};

	return (
		<>
			<Badge {...commonProps} fieldName={fields.badge} />
			<Name {...commonProps} fieldName={fields.name} />
			<Type {...commonProps} fieldName={fields.type} />
		</>
	);
};

export default memo(Fieldset);
