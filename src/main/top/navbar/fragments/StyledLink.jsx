import styled from 'styled-components';

import { colors } from 'utils/theme';

export default styled.a`
	display: flex;
	border-bottom: 1px solid transparent;
	text-decoration: none;
	color: ${colors.gray[100]};
	cursor: pointer;
	transition: border-bottom .2s;

	&:hover {
		border-bottom-color: ${colors.gray[100]};
	}

	svg {
		height: 15px;
		margin-right: 8px;
		position: relative;
		top: 3px;
	}
`;
