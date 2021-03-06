import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FastField } from 'formik';

import { constants } from 'utils';
import { ConditionalLabel, InputWrapper, LabelWrapper } from '../elements';
import {
	Input,
	Label,
	ListOfOptions,
	Option,
} from '../elements/optionsList';
import { fragmentTypes } from './utils';

const Fermentation = ({ fieldName, formName }) => (
	<>
		<LabelWrapper>
			<FastField
				component={ConditionalLabel}
				formName={formName}
				name={fieldName}
				reset={[constants.fermentations.top]}
			>
				<FormattedMessage id={`dashboard.${fieldName}`} />
			</FastField>
		</LabelWrapper>
		<InputWrapper place="wide">
			<FastField
				name={fieldName}
				render={({ field, form }) => {
					const value = field.value === null ? [] : field.value;
					const { bottom, spontaneous, top } = constants.fermentations;

					const onOptionChange = ({ target }, type) => {
						if (target.checked) {
							form.setFieldValue(field.name, [...value, type]);
						} else {
							form.setFieldValue(
								field.name,
								value.filter(item => item !== type),
							);
						}
					};

					return (
						<ListOfOptions disabled={field.value === null}>
							<Option>
								<Input
									checked={value.includes(bottom)}
									id="fermentation-bottom"
									onChange={e => onOptionChange(e, bottom)}
									type="checkbox"
								/>
								<Label htmlFor="fermentation-bottom">
									<FormattedMessage id="fermentationType.bottom" />
								</Label>
							</Option>
							<Option>
								<Input
									checked={value.includes(top)}
									id="fermentation-top"
									onChange={e => onOptionChange(e, top)}
									type="checkbox"
								/>
								<Label htmlFor="fermentation-top">
									<FormattedMessage id="fermentationType.top" />
								</Label>
							</Option>
							<Option>
								<Input
									checked={value.includes(spontaneous)}
									id="fermentation-spontaneous"
									onChange={e => onOptionChange(e, spontaneous)}
									type="checkbox"
								/>
								<Label htmlFor="fermentation-spontaneous">
									<FormattedMessage id="fermentationType.spontaneous" />
								</Label>
							</Option>
						</ListOfOptions>
					);
				}}
			/>
		</InputWrapper>
	</>
);

Fermentation.propTypes = fragmentTypes;

export default Fermentation;
