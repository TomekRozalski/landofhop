import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FastField } from 'formik';

import {
	ConditionalLabel,
	InputWrapper,
	LabelWrapper,
	StyledSwitch,
} from '../elements';
import { fragmentTypes } from './utils';

const Pasteurization = ({ fieldName, formName }) => (
	<>
		<LabelWrapper>
			<FastField
				component={ConditionalLabel}
				formName={formName}
				name={fieldName}
				reset={false}
			>
				<FormattedMessage id={`dashboard.${fieldName}`} />
			</FastField>
		</LabelWrapper>
		<InputWrapper place="left">
			<FastField
				component={StyledSwitch}
				name={fieldName}
			/>
		</InputWrapper>
	</>
);

Pasteurization.propTypes = fragmentTypes;

export default Pasteurization;
