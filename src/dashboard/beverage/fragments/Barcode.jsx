import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FastField } from 'formik';

import { Input } from 'elements';
import { ConditionalLabel, InputWrapper, LabelWrapper } from '../elements';
import { fragmentTypes } from './utils';

const Barcode = ({ fieldName, formName }) => (
	<>
		<LabelWrapper>
			<FastField
				component={ConditionalLabel}
				formName={formName}
				name={fieldName}
				reset=""
			>
				<FormattedMessage id={`dashboard.${fieldName}`} />
			</FastField>
		</LabelWrapper>
		<InputWrapper place="wide">
			<FastField
				component={Input}
				id={`${formName}-${fieldName}`}
				name={fieldName}
			/>
		</InputWrapper>
	</>
);

Barcode.propTypes = fragmentTypes;

export default Barcode;
