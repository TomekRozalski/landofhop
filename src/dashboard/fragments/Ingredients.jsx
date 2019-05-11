/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { FastField, FieldArray } from 'formik';

import { LanguageContext } from 'config';
import { Label, Textarea } from 'elements';
import { emptyIngredients, languagesList } from 'dashboard/utils';
import {
	AddElement,
	InputWrapper,
	LabelWrapper,
	LineSeparator,
	RemoveElement,
	RevealButton,
	StyledMarkdown,
	StyledSelect,
	StyledSwitch,
} from 'dashboard/elements';
import { fragmentTypes } from './utils';

const Ingredients = ({ fieldName, formName }) => {
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
									<Label htmlFor={`${formName}-${fieldName}${index}-complete`}>
										<FormattedMessage id="dashboard.areIngredientsComplete" />
									</Label>
								</LabelWrapper>
								<InputWrapper place="left">
									<FastField
										component={StyledSwitch}
										id={`${formName}-${fieldName}${index}-complete`}
										name={`${fieldName}.${index}.complete`}
									/>
								</InputWrapper>
								<LabelWrapper>
									<Label htmlFor={`${formName}-${fieldName}${index}-language`}>
										<FormattedMessage id="dashboard.ingredientsLanguage" />
									</Label>
								</LabelWrapper>
								<InputWrapper place="wide">
									<FastField
										component={StyledSelect}
										formName={formName}
										id={`${formName}-${fieldName}${index}-language`}
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
											<AddElement onClick={() => push(emptyIngredients)} />
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
							<RevealButton onClick={() => push(emptyIngredients)} />
						</InputWrapper>
					</>
				);
			}}
		/>
	);
};

Ingredients.propTypes = fragmentTypes;

export default Ingredients;
