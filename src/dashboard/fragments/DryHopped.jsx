import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FastField } from 'formik';

import {
	ConditionalLabel,
	InputWrapper,
	LabelWrapper,
	StyledSwitch,
} from 'dashboard/elements';
import { fragmentTypes } from './utils';

const DryHopped = ({ fieldName, formName }) => (
	<>
		<LabelWrapper>
			<FastField
				component={ConditionalLabel}
				formName={formName}
				name={fieldName}
			>
				<FormattedMessage id={`dashboard.${fieldName}`} />
			</FastField>
		</LabelWrapper>
		<InputWrapper place="left">
			<FastField
				component={StyledSwitch}
				name={fieldName}
			/>
		</InputWrapper>
	</>
);

DryHopped.propTypes = fragmentTypes;

export default DryHopped;
