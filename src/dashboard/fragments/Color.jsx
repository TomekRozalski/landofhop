import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FastField } from 'formik';

import { Input } from 'elements';
import {
	ColorPreview,
	ConditionalLabel,
	InputWrapper,
	LabelWrapper,
} from 'dashboard/elements';
import { fragmentTypes } from './utils';

const Color = ({ fieldName, formName }) => (
	<>
		<LabelWrapper>
			<FastField
				component={ConditionalLabel}
				formName={formName}
				name={fieldName}
				reset="#eeeeee"
			>
				<FormattedMessage id={`dashboard.${fieldName}`} />
			</FastField>
		</LabelWrapper>
		<InputWrapper place="left">
			<FastField
				component={Input}
				id={`${formName}-${fieldName}`}
				name={fieldName}
			/>
		</InputWrapper>
		<InputWrapper place="middle">
			<FastField
				component={ColorPreview}
				name={fieldName}
			/>
		</InputWrapper>
	</>
);

Color.propTypes = fragmentTypes;

export default Color;
