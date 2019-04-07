import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { FastField } from 'formik';

import { LanguageContext } from 'config';
import { Input } from 'elements';
import { extractUnitList, extractRelateList } from 'dashboard/utils';
import {
	ConditionalLabel,
	InputWrapper,
	LabelWrapper,
	StyledSelect,
} from 'dashboard/elements';
import { fragmentTypes } from './utils';

const Extract = ({ fieldName, formName }) => {
	const { language } = useContext(LanguageContext);

	return (
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
					{ extractUnitList() }
				</FastField>
			</InputWrapper>
			<InputWrapper place="left">
				<FastField
					component={StyledSelect}
					formName={formName}
					name={`${fieldName}.relate`}
				>
					{ extractRelateList(language) }
				</FastField>
			</InputWrapper>
		</>
	);
};

Extract.propTypes = fragmentTypes;

export default Extract;
