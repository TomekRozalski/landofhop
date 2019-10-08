import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

import { colors } from 'utils/theme';

export default styled(RouterLink)`
	display: flex;
	align-items: center;
	padding: 1rem;
	color: ${colors.gray[100]};
	background-color: ${colors.gray[700]};
	transition: color .2s, background-color .2s;

	${({ disabled }) => (disabled
		? (`
			text-decoration: line-through;
			cursor: default
		`)
		: (`
			text-decoration: none;

			&:hover {
				color: ${colors.gray[700]};
				background-color: ${colors.gray[100]};
			}
		`)
	)}
`;
