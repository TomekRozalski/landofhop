import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FastField, FieldArray } from 'formik';


import { Label } from 'elements';
// import { emptySelect } from 'dashboard/utils';
import {
	AddElement,
	InputWrapper,
	LabelWrapper,
	LineSeparator,
	RemoveElement,
	RevealButton,
} from 'dashboard/elements';

import { fragmentTypes } from './utils';
import Options from './aged/Options';

const emptySelect = {
	type: 'sdf',
};

const Aged = ({ fieldName, formName }) => (
	<FieldArray
		name={fieldName}
		render={({ form, push, remove }) => {
			console.log('form', form);

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
									component={Options}
									id={`${formName}-${fieldName}${index}-type`}
									name={`${fieldName}.${index}.type`}
								/>
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
