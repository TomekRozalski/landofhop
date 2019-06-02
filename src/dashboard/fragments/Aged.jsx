/* eslint-disable react/no-array-index-key */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FastField, FieldArray } from 'formik';

import { Input, Label } from 'elements';
import { agedTimeUnitsList, agedPreviousContentList } from 'dashboard/utils';
import {
	AddElement,
	InputWrapper,
	LabelWrapper,
	LineSeparator,
	RemoveElement,
	RevealButton,
	StyledSelect,
} from 'dashboard/elements';

import { fragmentTypes } from './utils';
import { Type, Wood } from './aged/';

const emptySelect = {
	time: {
		value: 0,
	},
};

const Aged = ({ fieldName, formName }) => (
	<FieldArray
		name={fieldName}
		render={({ form, push, remove }) => {
			const values = form.values[fieldName];
			if (values && values.length) {
				return values.map((_, index) => {
					const loopLength = values.length;
					const lastInput = loopLength === index + 1;

					return (
						<React.Fragment key={index}>
							<LabelWrapper>
								<Label>
									<FormattedMessage id={`dashboard.${fieldName}`} />
								</Label>
							</LabelWrapper>
							<InputWrapper place="wide">
								<FastField
									component={Type}
									name={`${fieldName}.${index}.type`}
								/>
							</InputWrapper>
							<InputWrapper place="wide">
								<FastField
									component={Wood}
									name={`${fieldName}.${index}.wood`}
								/>
							</InputWrapper>
							<InputWrapper place="left">
								<FastField
									component={Input}
									name={`${fieldName}.${index}.time.value`}
									type="number"
								/>
							</InputWrapper>
							<InputWrapper place="middle">
								<FastField
									component={StyledSelect}
									formName={formName}
									name={`${fieldName}.${index}.time.unit`}
								>
									{ agedTimeUnitsList() }
								</FastField>
							</InputWrapper>
							<InputWrapper place="wide">
								<FastField
									component={StyledSelect}
									formName={formName}
									// isError={isError}
									// isLoading={isLoading}
									multi
									name={`${fieldName}.${index}.previousContent`}
								>
									{ agedPreviousContentList() }
								</FastField>
							</InputWrapper>
							{
								lastInput && (
									<InputWrapper place="right">
										<RemoveElement onClick={() => remove(index)} />
										<AddElement onClick={() => push(emptySelect)} />
									</InputWrapper>
								)
							}
							{ values.length !== index + 1 && <LineSeparator />}
						</React.Fragment>
					);
				});
			}

			return (
				<>
					<LabelWrapper>
						<Label>
							<FormattedMessage id={`dashboard.${fieldName}`} />
						</Label>
					</LabelWrapper>
					<InputWrapper place="wide">
						<RevealButton onClick={() => push(emptySelect)} />
					</InputWrapper>
				</>
			);
		}}
	/>
);

Aged.propTypes = fragmentTypes;

export default Aged;
