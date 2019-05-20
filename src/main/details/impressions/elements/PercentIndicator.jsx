import styled from 'styled-components';
import { colors } from 'utils/theme';

const PercentIndicator = styled.dd`
	display: inline-block;
	width: 110px;
	height: 1rem;
	margin: 0;
	border: 1px solid ${colors.gray[400]};
	overflow: hidden;
	position: relative;
	top: 1px;

	::before {
		display: block;
		width: 100%;
		height: 100%;
		content: '';
		background-color: ${colors.gray[700]};
		position: absolute;
		top: 0;
		left: 0;
	}

	::after {
		display: block;
		width: ${({ value }) => (value * 1.1 || 0)}px;
		height: 100%;
		content: '';
		background-color: ${colors.success.strong};
		position: absolute;
		top: 0;
		left: 0;
	}
`;

export default PercentIndicator;
