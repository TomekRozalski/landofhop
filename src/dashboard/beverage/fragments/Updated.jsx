import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FastField } from 'formik';
import { format } from 'date-fns';

import { Input } from 'elements';
import { ConditionalLabel, InputWrapper, LabelWrapper } from '../elements';
import { fragmentTypes } from './utils';

const Updated = ({ fieldName, formName }) => (
	<>
		<LabelWrapper>
			<FastField
				component={ConditionalLabel}
				formName={formName}
				name={fieldName}
				reset={format(new Date(), 'dd.MM.yyyy, HH:mm:ss')}
			>
				<FormattedMessage id={`dashboard.${fieldName}`} />
			</FastField>
		</LabelWrapper>
		<InputWrapper place="wide">
			<FastField
				component={Input}
				name={fieldName}
			/>
		</InputWrapper>
	</>
);

Updated.propTypes = fragmentTypes;

export default Updated;
