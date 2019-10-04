import { css } from 'styled-components';

import mq from './mq';
import sizes from './sizes';

const headerGrid = css`
	display: grid;
	grid-template-columns: ${'minmax(10rem, auto) 1fr minmax(10rem, auto)'};
	grid-template-areas: 'search logo more';
	width: 100%;
	margin: 0 auto;

	${mq.md`
		grid-template-columns: ${'minmax(20rem, auto) 1fr minmax(20rem, auto)'};
	`}

	${mq.xl`
		width: ${sizes.container.width.xl}px;
		grid-template-columns: ${`minmax(${sizes.topbar.height.xl}px, auto) 1fr minmax(${sizes.topbar.height.xl}px, auto)`};
	`}

	/*
		@ToDo: in tiles
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
	*/
`;

export default {
	headerGrid,
};
