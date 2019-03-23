import { css } from 'styled-components';

import colors from '../colors';

export default css`
	.slider {
		width: 100%;
		height: 5px;
		margin: 0 10px;

		.handle {
			width: 0;
			height: 20px;
			top: -7px;

			&:focus {
				outline: none;
			}
		}

		&.disabled .handle div {
			background-color: ${colors.gray[400]};
			cursor: not-allowed;
		}

		.bar {
			height: 100%;
			border-radius: 5px;
		}

		.bar-0 {
			background-color: ${colors.success.strong};
		}

		.bar-1 {
			background-color: ${colors.gray[400]};
		}
	}
`;
