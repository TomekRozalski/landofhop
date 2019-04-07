import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FastField } from 'formik';

import { Input, Label } from 'elements';
import { InputWrapper, LabelWrapper } from 'dashboard/elements';
import { fragmentTypes } from './utils';

const Code = ({ fieldName, formName }) => (
	<>
		<LabelWrapper>
			<Label htmlFor={`${formName}-${fieldName}`} required>
				<FormattedMessage id={`dashboard.${fieldName}`} />
			</Label>
		</LabelWrapper>
		<InputWrapper place="wide">
			<FastField
				component={Input}
				id={`${formName}-${fieldName}`}
				inverse
				name={fieldName}
			/>
		</InputWrapper>
	</>
);

Code.propTypes = fragmentTypes;

export default Code;
