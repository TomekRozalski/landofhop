/* eslint react/no-array-index-key: 0 */
import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { FastField, FieldArray } from 'formik';

import { LanguageContext } from 'config';
import { Label, Textarea } from 'elements';
import { emptySelect, languagesList } from 'dashboard/utils';
import {
	AddElement,
	InputWrapper,
	LabelWrapper,
	LineSeparator,
	RemoveElement,
	RevealButton,
	StyledMarkdown,
	StyledSelect,
} from 'dashboard/elements';
import { fragmentTypes } from './utils';

const Tale = ({ fieldName, formName }) => {
	const { language } = useContext(LanguageContext);

	return (
		<FieldArray
			name={fieldName}
			render={({ form, push, remove }) => {
				const values = form.values[fieldName];
				if (values && values.length > 0) {
					return values.map((_, index) => {
						const loopLength = values.length;
						const lastInput = loopLength === index + 1;

						return (
							<React.Fragment key={index}>
								<LabelWrapper>
									<Label htmlFor={`${formName}-${fieldName}${index}-value`}>
										<FormattedMessage id={`dashboard.${fieldName}`} />
									</Label>
								</LabelWrapper>
								<InputWrapper place="wide">
									<FastField
										component={Textarea}
										id={`${formName}-${fieldName}${index}-value`}
										name={`${fieldName}.${index}.value`}
									/>
								</InputWrapper>
								<InputWrapper place="wide">
									<StyledMarkdown>
										{values[index].value}
									</StyledMarkdown>
								</InputWrapper>
								<LabelWrapper>
									<Label htmlFor={`${formName}-${fieldName}${index}-language`}>
										<FormattedMessage id="dashboard.taleLanguage" />
									</Label>
								</LabelWrapper>
								<InputWrapper place="wide">
									<FastField
										component={StyledSelect}
										formName={formName}
										name={`${fieldName}.${index}.lang`}
										placeholder="selectLanguage"
									>
										{ languagesList(language) }
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
};

Tale.propTypes = fragmentTypes;

export default Tale;
