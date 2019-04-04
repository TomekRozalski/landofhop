/* eslint react/no-array-index-key: 0 */
import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { FastField, FieldArray } from 'formik';

import { LanguageContext } from 'config';
import { Input, Label } from 'elements';
import { emptySelect, languagesList } from 'dashboard/utils';
import {
	AddElement,
	InputWrapper,
	LabelWrapper,
	RemoveElement,
	StyledSelect,
} from 'dashboard/elements';
import { fields, fragmentTypes } from '../utils';

const Name = ({ formName }) => {
	const { language } = useContext(LanguageContext);

	return (
		<>
			<LabelWrapper>
				<Label htmlFor={`${formName}-${fields.name}`} required>
					<FormattedMessage id={`dashboard.${fields.name}`} />
				</Label>
			</LabelWrapper>
			<FieldArray
				name={fields.name}
				render={({ form, push, remove }) => (
					form.values[fields.name].map((_, index) => {
						const loopLength = form.values[fields.name].length;
						const lastInput = loopLength === index + 1;

						return (
							<React.Fragment key={index}>
								<InputWrapper place="left">
									<FastField
										component={Input}
										id={lastInput ? `${formName}-${fields.name}-value` : null}
										name={`${fields.name}.${index}.value`}
									/>
								</InputWrapper>
								<InputWrapper place="middle">
									<FastField
										component={StyledSelect}
										formName={formName}
										name={`${fields.name}.${index}.lang`}
									>
										{ languagesList(language) }
									</FastField>
								</InputWrapper>
								{
									lastInput && (
										<InputWrapper place="right">
											{ loopLength > 1 && <RemoveElement onClick={() => remove(index)} /> }
											<AddElement onClick={() => push(emptySelect)} />
										</InputWrapper>
									)
								}
							</React.Fragment>
						);
					})
				)}
			/>
		</>
	);
};

Name.propTypes = fragmentTypes;

export default Name;
