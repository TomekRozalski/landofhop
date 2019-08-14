import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FastField } from 'formik';

import { Textarea } from 'elements';
import { ConditionalLabel, InputWrapper, LabelWrapper } from '../elements';
import { fragmentTypes } from './utils';

const Notes = ({ fieldName, formName }) => (
	<>
		<LabelWrapper>
			<FastField
				component={ConditionalLabel}
				formName={formName}
				name={fieldName}
				reset="• "
			>
				<FormattedMessage id={`dashboard.${fieldName}`} />
			</FastField>
		</LabelWrapper>
		<InputWrapper place="wide">
			<FastField
				component={Textarea}
				id={`${formName}-${fieldName}`}
				name={fieldName}
			/>
		</InputWrapper>
	</>
);

Notes.propTypes = fragmentTypes;

export default Notes;
