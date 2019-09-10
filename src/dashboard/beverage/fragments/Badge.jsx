import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FastField } from 'formik';

import { Input, Label } from 'elements';
import { InputWrapper, LabelWrapper } from '../elements';
import { fragmentTypes } from './utils';

const Badge = ({
	disabled,
	fieldName,
	formName,
	inverse,
}) => (
	<>
		<LabelWrapper>
			<Label htmlFor={`${formName}-${fieldName}`} required>
				<FormattedMessage id={`dashboard.${fieldName}`} />
			</Label>
		</LabelWrapper>
		<InputWrapper place="wide">
			<FastField
				component={Input}
				disabled={disabled}
				id={`${formName}-${fieldName}`}
				inverse={inverse}
				name={fieldName}
			/>
		</InputWrapper>
	</>
);

Badge.propTypes = fragmentTypes;

export default Badge;
