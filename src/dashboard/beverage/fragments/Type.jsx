import React from 'react';
import { FastField } from 'formik';
import { FormattedMessage } from 'react-intl';

import { Label } from 'elements';
import { InputWrapper, LabelWrapper, StyledSelect } from '../elements';
import { ingredientTypesList } from '../utils';
import { fragmentTypes } from './utils';

const Type = ({ fieldName, formName }) => (
	<>
		<LabelWrapper>
			<Label htmlFor={`${formName}-${fieldName}`} required>
				<FormattedMessage id={`dashboard.${fieldName}`} />
			</Label>
		</LabelWrapper>
		<InputWrapper place="wide">
			<FastField
				component={StyledSelect}
				formName={formName}
				inverse
				name={fieldName}
			>
				{ ingredientTypesList() }
			</FastField>
		</InputWrapper>
	</>
);

Type.propTypes = fragmentTypes;

export default Type;
