import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FastField } from 'formik';

import { Input, Label } from 'elements';
import { InputWrapper, LabelWrapper } from 'dashboard/elements';
import { fields, fragmentTypes } from '../utils';

const Badge = ({ formName }) => (
	<>
		<LabelWrapper>
			<Label htmlFor={`${formName}-${fields.badge}`} required>
				<FormattedMessage id={`dashboard.${fields.badge}`} />
			</Label>
		</LabelWrapper>
		<InputWrapper place="wide">
			<FastField
				component={Input}
				id={`${formName}-${fields.badge}`}
				name={fields.badge}
			/>
		</InputWrapper>
	</>
);

Badge.propTypes = fragmentTypes;

export default Badge;
