/* eslint react/prop-types: 0 */
import React from 'react';

import { FormSection, ResetButton, SubmitButton } from '../elements';
import Fieldset from './Fieldset';

const FormBody = ({ showSubform, update }) => ({ isSubmitting, isValid }) => (
	<FormSection
		title="dashboard.labelInfo.title"
		description="dashboard.labelInfo.description"
	>
		<Fieldset showSubform={showSubform} update={update} />
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

export default FormBody;
