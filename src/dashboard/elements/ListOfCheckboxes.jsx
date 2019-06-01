import styled from 'styled-components';

import { colors, gutters } from 'utils/theme';

export const Option = styled.li`
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

export const Input = styled.input.attrs({
	type: 'checkbox',
})`
	display: none;
`;

export const Label = styled.label`
	flex-grow: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	height: ${gutters.inputHeight}rem;
	cursor: pointer;
`;

export const ListOfCheckboxes = styled.ul`
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
