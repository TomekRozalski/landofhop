import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FastField } from 'formik';

import { Input } from 'elements';
import { ConditionalLabel, InputWrapper, LabelWrapper } from 'dashboard/elements';
import { fragmentTypes } from './utils';

const Website = ({ fieldName, formName }) => (
	<>
		<LabelWrapper>
			<FastField
				component={ConditionalLabel}
				formName={formName}
				inverse
				name={fieldName}
				reset="http://"
			>
				<FormattedMessage id={`dashboard.${fieldName}`} />
			</FastField>
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

Website.propTypes = fragmentTypes;

export default Website;
