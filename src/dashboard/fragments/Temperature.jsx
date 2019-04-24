import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FastField } from 'formik';

import { Input } from 'elements';
import { temperatureUnitsList } from 'dashboard/utils';
import {
	ConditionalLabel,
	InputWrapper,
	LabelWrapper,
	StyledSelect,
} from 'dashboard/elements';
import { fragmentTypes } from './utils';

const Temperature = ({ fieldName, formName }) => (
	<>
		<LabelWrapper>
			<FastField
				component={ConditionalLabel}
				formName={formName}
				name={fieldName}
				reset={{
					from: 0,
					to: 0,
					unit: temperatureUnitsList()[0],
				}}
			>
				<FormattedMessage id={`dashboard.${fieldName}`} />
			</FastField>
		</LabelWrapper>
		<InputWrapper place="left">
			<FastField
				component={Input}
				name={`${fieldName}.from`}
				type="number"
			/>
		</InputWrapper>
		<InputWrapper place="middle">
			<FastField
				component={Input}
				name={`${fieldName}.to`}
				type="number"
			/>
		</InputWrapper>
		<InputWrapper place="right">
			<FastField
				component={StyledSelect}
				formName={formName}
				name={`${fieldName}.unit`}
			>
				{ temperatureUnitsList() }
			</FastField>
		</InputWrapper>
	</>
);

Temperature.propTypes = fragmentTypes;

export default Temperature;
