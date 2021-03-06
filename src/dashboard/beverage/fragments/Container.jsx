import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FastField } from 'formik';

import { Input, Label } from 'elements';
import {
	containerColorsList,
	containerMaterialsList,
	containerTypesList,
	containerUnitsList,
} from '../utils';
import {
	CapWireFlipSwitch,
	InputWrapper,
	LabelWrapper,
	StyledSelect,
} from '../elements';
import { fragmentTypes } from './utils';

const Container = ({ fieldName, formName }) => (
	<>
		<LabelWrapper>
			<Label htmlFor={`${formName}-${fieldName}`} required>
				<FormattedMessage id={`dashboard.${fieldName}`} />
			</Label>
		</LabelWrapper>
		<InputWrapper place="left">
			<FastField
				component={StyledSelect}
				formName={formName}
				name={`${fieldName}.type`}
			>
				{ containerTypesList() }
			</FastField>
		</InputWrapper>
		<InputWrapper place="middle">
			<FastField
				component={StyledSelect}
				formName={formName}
				name={`${fieldName}.material`}
			>
				{ containerMaterialsList() }
			</FastField>
		</InputWrapper>
		<InputWrapper place="right">
			<FastField
				component={StyledSelect}
				formName={formName}
				name={`${fieldName}.color`}
			>
				{ containerColorsList() }
			</FastField>
		</InputWrapper>
		<InputWrapper place="left">
			<FastField
				component={Input}
				name={`${fieldName}.capacityValue`}
				type="number"
			/>
		</InputWrapper>
		<InputWrapper place="middle">
			<FastField
				component={StyledSelect}
				formName={formName}
				name={`${fieldName}.unit`}
			>
				{ containerUnitsList() }
			</FastField>
		</InputWrapper>
		<FastField
			component={CapWireFlipSwitch}
			name={fieldName}
		/>
	</>
);

Container.propTypes = fragmentTypes;

export default Container;
