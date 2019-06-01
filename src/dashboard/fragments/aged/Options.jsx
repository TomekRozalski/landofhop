import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { constants } from 'utils';
import { colors, gutters } from 'utils/theme';

const Option = styled.li`
	flex-grow: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	border-width: 1px;
	border-style: solid;

	& + & {
		border-left-width: 0;
	}
`;

const Input = styled.input.attrs({
	type: 'checkbox',
})`
	display: none;
`;

const Label = styled.label`
	flex-grow: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	height: ${gutters.inputHeight}rem;
	cursor: pointer;
`;

const ListOfCheckboxes = styled.ul`
	display: flex;
	width: 100%;
	height: ${gutters.inputHeight}rem;
	${({ disabled }) => {
		if (disabled) {
			return (`
				background-color: ${colors.gray[600]};
				pointer-events: none;
			`);
		}

		return `background-color: ${colors.gray[500]};`;
	}}

	${Option} {
		border-color: ${({ disabled }) => (disabled ? colors.gray[400] : colors.gray[300])};
	}

	${Label} {
		color: ${({ disabled }) => (disabled ? colors.gray[300] : colors.gray[200])};
	}

	${Input}:checked + ${Label} {
		background-color: ${({ disabled }) => (disabled ? colors.gray[400] : colors.success.strong)};
		color: ${colors.gray[700]}
	}
`;

const Options = ({ field, form }) => {
	const value = !field.value ? [] : field.value;
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

	console.log('value', field, value);

	return (
		<ListOfCheckboxes disabled={field.value === null}>
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
		</ListOfCheckboxes>
	);
};

export default Options;
