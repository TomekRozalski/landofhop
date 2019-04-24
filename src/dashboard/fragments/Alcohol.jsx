import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { FastField } from 'formik';

import { LanguageContext } from 'config';
import { Input } from 'elements';
import { alcoholUnitsList, alcoholRelatesList, alcoholScopesList } from 'dashboard/utils';
import {
	ConditionalLabel,
	InputWrapper,
	LabelWrapper,
	StyledSelect,
} from 'dashboard/elements';
import { fragmentTypes } from './utils';

const Alcohol = ({ fieldName, formName }) => {
	const { language } = useContext(LanguageContext);

	return (
		<>
			<LabelWrapper>
				<FastField
					component={ConditionalLabel}
					formName={formName}
					name={fieldName}
					reset={{
						relate: alcoholRelatesList()[0],
						scope: alcoholScopesList()[0],
						unit: alcoholUnitsList()[0],
						value: 0,
					}}
				>
					<FormattedMessage id={`dashboard.${fieldName}`} />
				</FastField>
			</LabelWrapper>
			<InputWrapper place="left">
				<FastField
					component={Input}
					id={`${formName}-${fieldName}-value`}
					name={`${fieldName}.value`}
					type="number"
				/>
			</InputWrapper>
			<InputWrapper place="middle">
				<FastField
					component={StyledSelect}
					formName={formName}
					name={`${fieldName}.unit`}
				>
					{ alcoholUnitsList() }
				</FastField>
			</InputWrapper>
			<InputWrapper place="left">
				<FastField
					component={StyledSelect}
					formName={formName}
					name={`${fieldName}.relate`}
				>
					{ alcoholRelatesList(language) }
				</FastField>
			</InputWrapper>
			<InputWrapper place="middle">
				<FastField
					component={StyledSelect}
					formName={formName}
					name={`${fieldName}.scope`}
				>
					{ alcoholScopesList(language) }
				</FastField>
			</InputWrapper>
		</>
	);
};

Alcohol.propTypes = fragmentTypes;

export default Alcohol;
