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

const Sweetness = ({ fieldName, formName }) => (
	<>
		<LabelWrapper>
			<FastField
				component={ConditionalLabel}
				formName={formName}
				name={fieldName}
				reset={0}
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

Sweetness.propTypes = fragmentTypes;

export default Sweetness;
