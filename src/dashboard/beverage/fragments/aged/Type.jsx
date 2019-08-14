import React, { useCallback } from 'react';
import { func, shape, string } from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { constants } from 'utils';
import {
	Input,
	Label,
	ListOfOptions,
	Option,
} from '../../elements/optionsList';

const Type = ({ field, form }) => {
	const { barrel, wood } = constants.aged.type;

	const onOptionChange = useCallback(({ target }) => {
		form.setFieldValue(field.name, target.dataset.type);
	}, []);

	return (
		<ListOfOptions>
			<Option>
				<Input
					checked={field.value === barrel}
					data-type={barrel}
					id={`${field.name}-${barrel}`}
					onChange={onOptionChange}
					type="radio"
				/>
				<Label htmlFor={`${field.name}-${barrel}`}>
					<FormattedMessage id="aged.type.barrel" />
				</Label>
			</Option>
			<Option>
				<Input
					checked={field.value === wood}
					data-type={wood}
					id={`${field.name}-${wood}`}
					onChange={onOptionChange}
					type="radio"
				/>
				<Label htmlFor={`${field.name}-${wood}`}>
					<FormattedMessage id="aged.type.wood" />
				</Label>
			</Option>
		</ListOfOptions>
	);
};

Type.propTypes = {
	field: shape({
		name: string.isRequired,
		value: string,
	}).isRequired,
	form: shape({
		setFieldValue: func.isRequired,
	}).isRequired,
};

export default Type;
