/* eslint react/prop-types: 0 */
import React from 'react';

import {
	MainHeader,
	ResetButton,
	SubmitButton,
	Wrapper,
} from 'dashboard/elements';
import Fieldset from './Fieldset';

const FormBody = ({ hide, showSubform }) => ({ isSubmitting, isValid }) => (
	<Wrapper>
		<MainHeader title="dashboard.addNewPlace.title" />
		<Fieldset showSubform={showSubform} />
		{/* -------------------------------- */}
		<ResetButton onClick={hide} />
		<SubmitButton
			type="submit"
			disabled={!isValid}
			isSubmitting={isSubmitting}
		/>
	</Wrapper>
);

export default FormBody;
