import styled from 'styled-components';

import { mq } from 'utils/theme';

export default styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 1.2rem;

	${mq.md`
		grid-column: 1 / 3;
		grid-row: 1;
		justify-content: flex-start;
		margin-top: 0;
	`}

	${mq.xl`
		grid-column: 2 / 5;
	`}
`;
