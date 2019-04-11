/* eslint react/no-array-index-key: 0 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FastField, FieldArray } from 'formik';

import { Input, Label } from 'elements';
import { emptySelect, currenciesList } from 'dashboard/utils';
import {
	AddElement,
	InputWrapper,
	LabelWrapper,
	RemoveElement,
	RevealButton,
	StyledDateInput,
	StyledSelect,
} from 'dashboard/elements';
import { fragmentTypes } from './utils';

const Price = ({ fieldName, formName }) => (
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

				const addNewElement = () => {
					const now = new Date();

					push({
						currency: '',
						date: now,
						value: '',
					});

					// setDate([ ...date, moment(now).format('DD.MM.YYYY, HH:mm:ss') ]);
				};

				if (values && values.length) {
					return values.map((_, index) => {
						const loopLength = values.length;
						const lastInput = loopLength === index + 1;

						return (
							<React.Fragment key={index}>
								<InputWrapper place="left">
									<FastField
										component={Input}
										id={lastInput ? `${formName}-${fieldName}-value` : null}
										name={`${fieldName}.${index}.value`}
									/>
								</InputWrapper>
								<InputWrapper place="middle">
									<FastField
										component={StyledSelect}
										formName={formName}
										name={`${fieldName}.${index}.currency`}
										placeholder="selectCurrency"
									>
										{ currenciesList() }
									</FastField>
								</InputWrapper>
								<InputWrapper place="middle">
									<FastField
										component={StyledDateInput}
										name={`${fieldName}.${index}.date`}
									/>
								</InputWrapper>
								{
									lastInput && (
										<InputWrapper place="right">
											<RemoveElement onClick={() => remove(index)} />
											<AddElement onClick={addNewElement} />
										</InputWrapper>
									)
								}
							</React.Fragment>
						);
					});
				}

				return (
					<InputWrapper place="wide">
						<RevealButton onClick={addNewElement} />
					</InputWrapper>
				);
			}}
		/>
	</>
);

Price.propTypes = fragmentTypes;

export default Price;
