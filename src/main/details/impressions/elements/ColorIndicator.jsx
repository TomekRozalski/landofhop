import styled from 'styled-components';
import { colors } from 'utils/theme';

const ColorIndicator = styled.dd`
	display: inline-block;
	width: 2rem;
	height: 2rem;
	margin: 0;
	border: 1px solid ${colors.gray[400]};
	background-color: ${({ value }) => (value || 'inherit')};
	position: relative;
	top: .4rem;
`;

export default ColorIndicator;
