import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FastField } from 'formik';

import { clarityList } from 'dashboard/utils';
import {
	ConditionalLabel,
	InputWrapper,
	LabelWrapper,
	StyledSelect,
} from 'dashboard/elements';
import { fragmentTypes } from './utils';

const Clarity = ({ fieldName, formName }) => (
	<>
		<LabelWrapper>
			<FastField
				component={ConditionalLabel}
				formName={formName}
				name={fieldName}
				reset={clarityList()[0]}
			>
				<FormattedMessage id={`dashboard.${fieldName}`} />
			</FastField>
		</LabelWrapper>
		<InputWrapper place="wide">
			<FastField
				component={StyledSelect}
				formName={formName}
				name={fieldName}
			>
				{ clarityList() }
			</FastField>
		</InputWrapper>
	</>
);

Clarity.propTypes = fragmentTypes;

export default Clarity;
