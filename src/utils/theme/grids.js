import { css } from 'styled-components';

import sizes from './sizes';

const headerGrid = css`
	display: grid;
	grid-template-columns: ${`minmax(${sizes.topbar.height}px, auto) 1fr minmax(${sizes.topbar.height}px, auto)`};
	grid-template-areas: 'search logo more';
	width: ${sizes.container.width}px;
	margin: 0 auto;

	/*
		@ToDo: in tiles
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
	*/
`;

export default {
	headerGrid,
};
