/* eslint react/prop-types: 0 */
import React from 'react';
import { get } from 'lodash';

import {
	// AddButton,
	FormSection,
	// ResetButton,
	// SubmitButton,
	SubSection,
} from 'dashboard/elements';

import { constants } from 'dashboard/utils';
import { fields } from './utils';

import {
	Badge,
	Name,
} from './fragments';

const FormBody = ({ showSubform }) => ({
	errors,
	setFieldValue,
	touched,
	values,
}) => {
	const formName = constants.forms.beverage.label;

	const commonProps = {
		formName,
		setFieldValue,
	};

	return (
		<FormSection
			title="dashboard.labelInfo.title"
			description="dashboard.labelInfo.description"
		>
			<Badge
				{...commonProps}
				errors={{
					badge: get(errors, [fields.badge]),
				}}
			/>
			{/* -------------------------------- */}
			<SubSection title="dashboard.brandInfo" />
			<Name
				{...commonProps}
				errors={{
					name: get(errors, [fields.name]),
				}}
				touched={{
					name: get(touched, [fields.name]),
				}}
				values={{
					name: get(values, [fields.name]),
				}}
			/>
		</FormSection>
	);
};

export default FormBody;
