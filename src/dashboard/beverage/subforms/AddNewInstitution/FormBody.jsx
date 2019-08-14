/* eslint react/prop-types: 0 */
import React from 'react';

import { MainHeader, Wrapper } from 'dashboard/common/elements';
import { ResetButton, SubmitButton } from '../../elements';
import Fieldset from './Fieldset';

const FormBody = ({ hide }) => ({ isSubmitting, isValid }) => (
	<Wrapper>
		<MainHeader title="dashboard.addNewInstitution.title" />
		<Fieldset />
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
