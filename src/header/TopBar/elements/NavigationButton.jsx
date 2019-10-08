import styled from 'styled-components';

import { colors, mq, sizes } from 'utils/theme';

export default styled.button`
	grid-area: more;
	display: flex;
    justify-content: center;
	align-items: center;
	padding: ${sizes.container.padding.xs}px;
	background: ${colors.gray[100]};
	cursor: pointer;

	${mq.md`
		padding: ${sizes.container.padding.md}px;
	`}

	${mq.xl`
		padding: ${sizes.container.padding.xl}px;
	`}

	&:focus {
		outline: none;
	}

	svg {
		display: block;
		width: 20px;
		height: 4px;
		opacity: 1;
		transition: opacity .2s;

		${mq.md`
			width: 30px;
			height: 6px;
		`}

		${mq.xl`
			width: 40px;
			height: 8px;
		`}
	}

	&:hover svg {
		opacity: .5;
	}
`;
