import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FastField } from 'formik';

import { Input } from 'elements';
import { ConditionalLabel, InputWrapper, LabelWrapper } from 'dashboard/elements';
import { fragmentTypes } from './utils';

const Latitude = ({ fieldName, formName }) => (
	<>
		<LabelWrapper>
			<FastField
				component={ConditionalLabel}
				formName={formName}
				inverse
				name={fieldName}
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
				type="number"
			/>
		</InputWrapper>
	</>
);

Latitude.propTypes = fragmentTypes;

export default Latitude;