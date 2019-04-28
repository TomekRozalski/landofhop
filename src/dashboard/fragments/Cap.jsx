import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FastField } from 'formik';

import { Label } from 'elements';
import { InputWrapper, LabelWrapper, StyledSwitch } from 'dashboard/elements';
import { fragmentTypes } from './utils';

const Cap = ({ fieldName, formName }) => (
	<>
		<LabelWrapper>
			<Label htmlFor={`${formName}-${fieldName}`}>
				<FormattedMessage id={`dashboard.${fieldName}`} />
			</Label>
		</LabelWrapper>
		<InputWrapper place="left">
			<FastField
				component={StyledSwitch}
				name={fieldName}
			/>
		</InputWrapper>
	</>
);

Cap.propTypes = fragmentTypes;

export default Cap;
