/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
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

const Ingredients = ({ fieldName, formName, resetWhenEmpty }) => {
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

					if (
						resetWhenEmpty
						&& form.values[resetWhenEmpty] !== null
						&& values.length === 0
					) {
						form.setFieldValue(resetWhenEmpty, null);
					}

					if (
						resetWhenEmpty
						&& form.values[resetWhenEmpty] === null
						&& values.length > 0
					) {
						form.setFieldValue(resetWhenEmpty, true);
					}

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

Ingredients.propTypes = {
	...fragmentTypes,
	resetWhenEmpty: PropTypes.string,
};

Ingredients.defaultProps = {
	resetWhenEmpty: null,
};

export default Ingredients;
