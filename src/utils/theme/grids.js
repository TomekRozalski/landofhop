import { css } from 'styled-components';

import sizes from './sizes';

const headerGrid = css`
	display: grid;
	grid-template-columns: auto 1fr auto;
	grid-template-areas: 'search logo more';
	width: ${sizes.container.width.lg};
	margin: 0 auto;
	padding: ${sizes.container.padding.lg};

	/*
		@ToDo: in tiles
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
	*/
`;

export default {
	headerGrid,
};
