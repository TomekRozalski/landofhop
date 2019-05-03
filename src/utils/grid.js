import { css } from 'styled-components';

import { gutters, mq } from './theme';

export default css`
	width: auto;
	padding: 0 ${gutters.default.xs}px;
	margin: 0 auto;

	/*
		@ToDo:
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
	*/

	${mq.md`
		display: grid;
		grid-template-columns: repeat(5, ${gutters.columnWidth.md}px);
		grid-gap: ${gutters.default.md}px;
		width: ${675 + (6 * gutters.default.md)}px;
		padding: 0 ${gutters.default.md}px;
	`}

	${mq.lg`
		grid-template-columns: repeat(5, ${gutters.columnWidth.lg}px);
		grid-gap: ${gutters.default.lg}px;
		width: ${900 + (6 * gutters.default.lg)}px;
		padding: 0 ${gutters.default.lg}px;
	`}

	${mq.xl`
		grid-template-columns: repeat(5, ${gutters.columnWidth.xl}px);
		grid-gap: ${gutters.default.xl}px;
		width: ${1100 + (6 * gutters.default.xl)}px;
		padding: 0 ${gutters.default.xl}px;
	`}
`;
