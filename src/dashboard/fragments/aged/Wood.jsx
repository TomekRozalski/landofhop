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

const Wood = ({ field, form }) => {
	const { beech, oak } = constants.aged.wood;

	const onOptionChange = useCallback(({ target }) => {
		form.setFieldValue(field.name, target.dataset.wood);
	}, []);

	return (
		<ListOfOptions disabled={field.value === null}>
			<Option>
				<Input
					checked={field.value === oak}
					data-wood={oak}
					id={`${field.name}-${oak}`}
					onChange={onOptionChange}
					type="radio"
				/>
				<Label htmlFor={`${field.name}-${oak}`}>
					<FormattedMessage id="aged.wood.oak" />
				</Label>
			</Option>
			<Option>
				<Input
					checked={field.value === beech}
					data-wood={beech}
					id={`${field.name}-${beech}`}
					onChange={onOptionChange}
					type="radio"
				/>
				<Label htmlFor={`${field.name}-${beech}`}>
					<FormattedMessage id="aged.wood.beech" />
				</Label>
			</Option>
		</ListOfOptions>
	);
};

Wood.propTypes = {
	field: shape({
		name: string.isRequired,
		value: string,
	}).isRequired,
	form: shape({
		setFieldValue: func.isRequired,
	}).isRequired,
};

export default Wood;
