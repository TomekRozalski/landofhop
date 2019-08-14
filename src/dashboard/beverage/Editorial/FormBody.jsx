/* eslint react/prop-types: 0 */
import React from 'react';

import { FormSection, ResetButton, SubmitButton } from '../elements';
import Fieldset from './Fieldset';

const FormBody = ({ showSubform }) => ({ isSubmitting, isValid, setFieldValue }) => (
	<FormSection
		title="dashboard.editorialInfo.title"
		description="dashboard.editorialInfo.description"
	>
		<Fieldset showSubform={showSubform} />
		{/* -------------------------------- */}
		<ResetButton
			disabled={!isValid}
			onClick={() => { setFieldValue('submitDirection', 'backward'); }}
			text="dashboard.saveAndMoveBack"
			type="submit"
		/>
		<SubmitButton
			disabled={!isValid}
			isSubmitting={isSubmitting}
			onClick={() => { setFieldValue('submitDirection', 'forward'); }}
			type="submit"
		/>
	</FormSection>
);

export default FormBody;
