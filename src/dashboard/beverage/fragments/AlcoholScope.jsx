import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FastField } from 'formik';

import { alcoholScopesList } from '../utils';
import {
	ConditionalLabel,
	InputWrapper,
	LabelWrapper,
	StyledSelect,
} from '../elements';
import { fragmentTypes } from './utils';

const AlcoholScope = ({ fieldName, formName }) => (
	<>
		<LabelWrapper>
			<FastField
				component={ConditionalLabel}
				formName={formName}
				name={fieldName}
				reset={alcoholScopesList({})[0]}
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
				{ alcoholScopesList({}) }
			</FastField>
		</InputWrapper>
	</>
);

AlcoholScope.propTypes = fragmentTypes;

export default AlcoholScope;
