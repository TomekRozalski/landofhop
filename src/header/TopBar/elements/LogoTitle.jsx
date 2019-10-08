import styled from 'styled-components';

import { mq, timingFunctions } from 'utils/theme';

export default styled.h1`
	width: 3rem;
	height: 100%;
	overflow: hidden;
	position: relative;
	transform: scaleX(1);
	transition: transform ${timingFunctions.default};

	${mq.md`
		width: 4rem;
	`}

	${mq.xl`
		width: 5rem;
	`}

	&::before {
		content: '';
		background: white;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}
`;
