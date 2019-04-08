import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FastField } from 'formik';

import { constants } from 'utils';
import { ConditionalLabel, InputWrapper, LabelWrapper } from 'dashboard/elements';
import {
	Input,
	Label,
	ListOfOptions,
	Option,
} from 'dashboard/elements/ListOfOptions';
import { fragmentTypes } from './utils';

const Aged = ({ fieldName, formName }) => (
	<>
		<LabelWrapper>
			<FastField
				component={ConditionalLabel}
				formName={formName}
				name={fieldName}
			>
				<FormattedMessage id={`dashboard.${fieldName}`} />
			</FastField>
		</LabelWrapper>
		<InputWrapper place="wide">
			<FastField
				name={fieldName}
				render={({ field, form }) => {
					const value = field.value === null ? [] : field.value;
					const { barrel, wood } = constants.agedTypes;

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
									checked={value.includes(barrel)}
									id="aged-barrel"
									onChange={e => onOptionChange(e, barrel)}
								/>
								<Label htmlFor="aged-barrel">
									<FormattedMessage id="agedType.barrel" />
								</Label>
							</Option>
							<Option>
								<Input
									checked={value.includes(wood)}
									id="aged-wood"
									onChange={e => onOptionChange(e, wood)}
								/>
								<Label htmlFor="aged-wood">
									<FormattedMessage id="agedType.wood" />
								</Label>
							</Option>
						</ListOfOptions>
					);
				}}
			/>
		</InputWrapper>
	</>
);

Aged.propTypes = fragmentTypes;

export default Aged;
