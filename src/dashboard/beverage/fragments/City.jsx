/* eslint react/no-array-index-key: 0 */
import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { FastField, FieldArray } from 'formik';

import { LanguageContext } from 'config';
import { Input, Label } from 'elements';
import { emptySelect, languagesList } from '../utils';
import {
	AddElement,
	InputWrapper,
	LabelWrapper,
	RemoveElement,
	StyledSelect,
} from '../elements';
import { fragmentTypes } from './utils';

const City = ({ fieldName, formName }) => {
	const { language } = useContext(LanguageContext);

	return (
		<>
			<LabelWrapper>
				<Label htmlFor={`${formName}-${fieldName}`} required>
					<FormattedMessage id={`dashboard.${fieldName}`} />
				</Label>
			</LabelWrapper>
			<FieldArray
				name={fieldName}
				render={({ form, push, remove }) => (
					form.values[fieldName].map((_, index) => {
						const loopLength = form.values[fieldName].length;
						const lastInput = loopLength === index + 1;

						return (
							<React.Fragment key={index}>
								<InputWrapper place="left">
									<FastField
										component={Input}
										id={lastInput ? `${formName}-${fieldName}` : null}
										inverse
										name={`${fieldName}.${index}.value`}
									/>
								</InputWrapper>
								<InputWrapper place="middle">
									<FastField
										component={StyledSelect}
										formName={formName}
										inverse
										name={`${fieldName}.${index}.lang`}
										placeholder="selectLanguage"
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

City.propTypes = fragmentTypes;

export default City;
