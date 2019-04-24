import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FastField } from 'formik';

import { Input } from 'elements';
import { expirationDateUnitsList } from 'dashboard/utils';
import {
	ConditionalLabel,
	InputWrapper,
	LabelWrapper,
	StyledSelect,
} from 'dashboard/elements';
import { fragmentTypes } from './utils';

const ExpirationDate = ({ fieldName, formName }) => (
	<>
		<LabelWrapper>
			<FastField
				component={ConditionalLabel}
				formName={formName}
				name={fieldName}
				reset={{
					value: 0,
					unit: expirationDateUnitsList()[0],
				}}
			>
				<FormattedMessage id={`dashboard.${fieldName}`} />
			</FastField>
		</LabelWrapper>
		<InputWrapper place="left">
			<FastField
				component={Input}
				id={`${formName}-${fieldName}-value`}
				name={`${fieldName}.value`}
				type="number"
			/>
		</InputWrapper>
		<InputWrapper place="middle">
			<FastField
				component={StyledSelect}
				formName={formName}
				name={`${fieldName}.unit`}
			>
				{ expirationDateUnitsList() }
			</FastField>
		</InputWrapper>
	</>
);

ExpirationDate.propTypes = fragmentTypes;

export default ExpirationDate;
