/* eslint react/no-array-index-key: 0 */
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
	RemoveElement,
	RevealButton,
	StyledMarkdown,
	StyledSelect,
} from 'dashboard/elements';
import { fragmentTypes } from './utils';

const Ingredients = ({ fieldName, formName }) => {
	const { language } = useContext(LanguageContext);

	return (
		<>
			<LabelWrapper>
				<Label htmlFor={`${formName}-${fieldName}`}>
					<FormattedMessage id={`dashboard.${fieldName}`} />
				</Label>
			</LabelWrapper>
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
									<InputWrapper place="left">
										<FastField
											component={Textarea}
											id={lastInput ? `${formName}-${fieldName}-value` : null}
											name={`${fieldName}.${index}.value`}
										/>
									</InputWrapper>
									<InputWrapper place="middle">
										<StyledMarkdown>
											{values[index].value}
										</StyledMarkdown>
									</InputWrapper>
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
												<AddElement onClick={() => push(emptyIngredients)} />
											</InputWrapper>
										)
									}
								</React.Fragment>
							);
						});
					}

					return (
						<InputWrapper place="wide">
							<RevealButton onClick={() => push(emptyIngredients)} />
						</InputWrapper>
					);
				}}
			/>
		</>
	);
};

Ingredients.propTypes = fragmentTypes;

export default Ingredients;
