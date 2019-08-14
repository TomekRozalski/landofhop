import styled from 'styled-components';

import { colors, gutters } from 'utils/theme';

import Input from './Input';
import Label from './Label';
import Option from './Option';

const ListOfOptions = styled.ul`
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

export default ListOfOptions;
