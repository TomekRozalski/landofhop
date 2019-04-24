import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FastField } from 'formik';

import { Input } from 'elements';
import { ConditionalLabel, InputWrapper, LabelWrapper } from 'dashboard/elements';
import { fragmentTypes } from './utils';

const Longitude = ({ fieldName, formName }) => (
	<>
		<LabelWrapper>
			<FastField
				component={ConditionalLabel}
				formName={formName}
				inverse
				name={fieldName}
				reset={0}
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

Longitude.propTypes = fragmentTypes;

export default Longitude;
