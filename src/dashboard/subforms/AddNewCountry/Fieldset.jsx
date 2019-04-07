import React, { memo } from 'react';

import { constants } from 'dashboard/utils';
import { Code, Name } from 'dashboard/fragments';
import { fields } from './utils';

const Fieldset = () => {
	const commonProps = {
		formName: constants.forms.country,
		inverse: true,
	};

	return (
		<>
			<Code {...commonProps} fieldName={fields.code} />
			<Name {...commonProps} fieldName={fields.name} />
		</>
	);
};

export default memo(Fieldset);
