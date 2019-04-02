import React from 'react';

import { constants } from 'dashboard/utils';
import {
	// AddButton,
	FormSection,
	// ResetButton,
	// SubmitButton,
	SubSection,
} from 'dashboard/elements';
import {
	Badge,
	Name,
} from './fragments';

const FormBody = ({ showSubform }) => (formikBag) => {
	console.log('FormBody renders');

	const formName = constants.forms.beverage.label;

	const commonProps = {
		...formikBag,
		formName,
		showSubform,
	};

	return (
		<FormSection
			title="dashboard.labelInfo.title"
			description="dashboard.labelInfo.description"
		>
			<Badge {...commonProps} />
			{/* -------------------------------- */}
			<SubSection title="dashboard.brandInfo" />
			<Name {...commonProps} />
		</FormSection>
	);
};

export default FormBody;
