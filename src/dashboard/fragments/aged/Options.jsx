import React, { useCallback } from 'react';
import { func, shape, string } from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { constants } from 'utils';
import {
	Input,
	Label,
	ListOfOptions,
	Option,
} from 'dashboard/elements/optionsList';

const Options = ({ field, form }) => {
	const { barrel, wood } = constants.agedTypes;
	const value = !field.value ? barrel : field.value;

	const onOptionChange = useCallback(({ target }) => {
		form.setFieldValue(field.name, target.dataset.type);
	}, []);

	return (
		<ListOfOptions disabled={field.value === null}>
			<Option>
				<Input
					checked={value === barrel}
					data-type={barrel}
					id={`${field.name}-${barrel}`}
					onChange={onOptionChange}
					type="radio"
				/>
				<Label htmlFor={`${field.name}-${barrel}`}>
					<FormattedMessage id="agedType.barrel" />
				</Label>
			</Option>
			<Option>
				<Input
					checked={value === wood}
					data-type={wood}
					id={`${field.name}-${wood}`}
					onChange={onOptionChange}
					type="radio"
				/>
				<Label htmlFor={`${field.name}-${wood}`}>
					<FormattedMessage id="agedType.wood" />
				</Label>
			</Option>
		</ListOfOptions>
	);
};

Options.propTypes = {
	field: shape({
		name: string.isRequired,
		value: string,
	}).isRequired,
	form: shape({
		setFieldValue: func.isRequired,
	}).isRequired,
};

export default Options;
