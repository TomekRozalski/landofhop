import React from 'react';

import {
	// AddButton,
	FormSection,
	// ResetButton,
	// SubmitButton,
	// SubSection,
} from 'dashboard/elements';

import { constants } from 'dashboard/utils';

import {
	Badge,
} from './fragments';

const FormBody = ({ showSubform }) => (formikBag) => {
	const formName = constants.forms.beverage.label;

	const formikProps = {
		...formikBag,
		formName,
		showSubform,
	};

	return (
		<FormSection
			title="dashboard.labelInfo.title"
			description="dashboard.labelInfo.description"
		>
			<div>abc</div>
			{/* <Badge {...formikProps} /> */}
			{/* -------------------------------- */}
		</FormSection>
	);
};

export default FormBody;
