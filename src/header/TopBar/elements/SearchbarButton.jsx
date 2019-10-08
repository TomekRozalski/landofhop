import styled from 'styled-components';

import { colors, mq, sizes } from 'utils/theme';

export default styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: ${sizes.container.padding.xs}px 3rem;
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
		width: 10px;
		height: 10px;
		opacity: 1;
		transition: opacity .2s;

		${mq.md`
			width: 20px;
			height: 20px;
		`}

		${mq.xl`
			width: 30px;
			height: 30px;
		`}
	}

	&:hover svg {
		opacity: .5;
	}
`;
