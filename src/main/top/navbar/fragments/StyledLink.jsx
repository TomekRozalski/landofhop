import styled from 'styled-components';

import { colors } from 'utils/theme';

export default styled.a`
	display: block;
	padding: 0 2rem;
	background-color: ${colors.gray[100]};
	text-decoration: none;
	color: ${colors.gray[700]};
	transition: background-color .2s, color .2s;

	&:hover {
		background-color: ${colors.gray[700]};
		color: ${colors.gray[100]};
	}

	svg {
		height: 15px;
		margin-right: 8px;
		position: relative;
		top: 3px;
	}
`;
