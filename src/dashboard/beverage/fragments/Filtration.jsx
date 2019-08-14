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

const Filtration = ({ fieldName, formName }) => (
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

Filtration.propTypes = fragmentTypes;

export default Filtration;
