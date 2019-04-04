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
	RevealButton,
	StyledSelect,
} from 'dashboard/elements';
import { fields, fragmentTypes } from '../utils';

const Series = ({ formName }) => {
	const { language } = useContext(LanguageContext);

	return (
		<>
			<LabelWrapper>
				<Label htmlFor={`${formName}-${fields.series}`}>
					<FormattedMessage id={`dashboard.${fields.series}`} />
				</Label>
			</LabelWrapper>
			<FieldArray
				name={fields.series}
				render={({ form, push, remove }) => {
					const values = form.values[fields.series];
					if (values && values.length) {
						return values.map((_, index) => {
							const loopLength = values.length;
							const lastInput = loopLength === index + 1;

							return (
								<React.Fragment key={index}>
									<InputWrapper place="left">
										<FastField
											component={Input}
											id={lastInput ? `${formName}-${fields.series}-value` : null}
											name={`${fields.series}.${index}.value`}
										/>
									</InputWrapper>
									<InputWrapper place="middle">
										<FastField
											component={StyledSelect}
											formName={formName}
											name={`${fields.series}.${index}.lang`}
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
								</React.Fragment>
							);
						});
					}

					return (
						<InputWrapper place="wide">
							<RevealButton onClick={() => push(emptySelect)} />
						</InputWrapper>
					);
				}}
			/>
		</>
	);
};

Series.propTypes = fragmentTypes;

export default Series;
