import { css } from 'styled-components';

import sizes from './sizes';

const headerGrid = css`
	display: grid;
	grid-template-columns: minmax(120px, auto) 1fr minmax(120px, auto);
	grid-template-areas: 'search logo more';
	width: ${sizes.container.width.lg};
	margin: 0 auto;

	/*
		@ToDo: in tiles
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
	*/
`;

export default {
	headerGrid,
};
