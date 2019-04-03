/* eslint react/prop-types: 0 */
import React from 'react';

import {
	FormSection,
	ResetButton,
	SubmitButton,
} from 'dashboard/elements';
import Fieldset from './Fieldset';

const FormBody = ({ showSubform }) => ({ isSubmitting, isValid }) => {
	console.log('FormBody renders');

	return (
		<FormSection
			title="dashboard.labelInfo.title"
			description="dashboard.labelInfo.description"
		>
			<Fieldset showSubform={showSubform} />
			{/* -------------------------------- */}
			<ResetButton type="reset" />
			<SubmitButton
				text="dashboard.continue"
				type="submit"
				disabled={!isValid}
				isSubmitting={isSubmitting}
			/>
		</FormSection>
	);
};

export default FormBody;
