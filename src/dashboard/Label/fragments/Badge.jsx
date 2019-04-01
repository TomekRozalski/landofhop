import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Field } from 'formik';

import { Input, Label } from 'elements';
import { InputWrapper, LabelWrapper } from 'dashboard/elements';
// import { Fields } from '../utils/enums';

const Fields = {
	BADGE: 'badge',
};

const Badge = ({ errors, formName }) => (
	<>
		<LabelWrapper>
			<Label htmlFor={`${formName}-${Fields.BADGE}`} required>
				<FormattedMessage id={`dashboard.${Fields.BADGE}`} />
			</Label>
		</LabelWrapper>
		<InputWrapper place="wide">
			<Field
				component={Input}
				error={errors[Fields.BADGE]}
				id={`${formName}-${Fields.BADGE}`}
				name={Fields.BADGE}
			/>
		</InputWrapper>
	</>
);

export default Badge;
