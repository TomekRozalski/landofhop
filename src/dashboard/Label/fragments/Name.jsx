import React, { useContext } from 'react';
import { func, shape, string } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Field, FieldArray } from 'formik';
import { get } from 'lodash';

import { LanguageContext } from 'config';
import { Input, Label } from 'elements';
import { emptySelect, isSelectEmpty, languagesList } from 'dashboard/utils';
import {
	AddElement,
	InputWrapper,
	LabelWrapper,
	RemoveElement,
	StyledSelect,
} from 'dashboard/elements';
import { fields } from '../utils';

const Name = ({
	errors,
	formName,
	setFieldValue,
	touched,
	values,
}) => {
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
				render={({ push, remove }) => (
					values[fields.name].map((_, index) => {
						const loopLength = values[fields.name].length;
						const lastInput = loopLength === index + 1;

						return (
							<>
								<InputWrapper place="left">
									<Field
										component={Input}
										error={get(errors, [fields.name, index, 'value'])}
										id={lastInput ? `${formName}-${fields.name}-value` : null}
										name={`${fields.name}.${index}.value`}
									/>
								</InputWrapper>
								<InputWrapper place="middle">
									<StyledSelect
										fieldName={`${fields.name}.${index}.lang`}
										formName={formName}
										placeholder="selectLanguage"
										setFieldValue={setFieldValue}
										warning={isSelectEmpty(touched, errors, `${fields.name}.${index}.lang`)}
										value={get(values, [fields.name, index, 'lang'])}
									>
										{ languagesList(language) }
									</StyledSelect>
								</InputWrapper>
								{
									lastInput && (
										<InputWrapper place="right">
											{ loopLength > 1 && <RemoveElement onClick={() => remove(index)} /> }
											<AddElement onClick={() => push(emptySelect)} />
										</InputWrapper>
									)
								}
							</>
						);
					})
				)}
			/>
		</>
	);
};

Name.propTypes = {
	errors: shape({
		[fields.name]: string,
	}).isRequired,
	formName: string.isRequired,
	setFieldValue: func.isRequired,
	touched: shape({
		[fields.name]: string,
	}).isRequired,
	values: shape({
		[fields.name]: string,
	}).isRequired,
};

export default Name;
