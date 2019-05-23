import styled from 'styled-components';

import { colors, fonts } from 'utils/theme';
import Checkbox from './Checkbox';

export default styled.label`
	display: block;
	padding-left: 3rem;
	font: 1.2rem / 1.8rem ${fonts.primary};
	color: ${colors.gray[200]};
	user-select: none;
	cursor: pointer;

	::before,
	::after {
		display: inline-block;
		width: 2rem;
		height: 2rem;
		border: 1px solid ${colors.gray[200]};
		content: '';
		position: absolute;
		top: .3rem;
		left: 0;
	}

	::after {
		background-color: ${({ type }) => colors.highlight[type]};
		visibility: hidden;
	}

	${Checkbox}:checked ~ &::after {
		visibility: visible;
	}
`;
