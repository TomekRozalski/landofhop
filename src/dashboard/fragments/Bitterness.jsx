import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FastField } from 'formik';

import { Input } from 'elements';
import {
	ConditionalLabel,
	InputWrapper,
	LabelWrapper,
	StyledSlider,
} from 'dashboard/elements';
import { fragmentTypes } from './utils';

const Bitterness = ({ fieldName, formName }) => (
	<>
		<LabelWrapper>
			<FastField
				component={ConditionalLabel}
				formName={formName}
				name={fieldName}
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
		<InputWrapper place="slider">
			<FastField
				component={StyledSlider}
				name={fieldName}
			/>
		</InputWrapper>
	</>
);

Bitterness.propTypes = fragmentTypes;

export default Bitterness;
