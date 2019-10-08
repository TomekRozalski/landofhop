import styled from 'styled-components';

import { mq, sizes } from 'utils/theme';

export default styled.div`
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;
	align-items: stretch;
	width: 100%;
	height: ${sizes.navbar.height.xs - sizes.container.border.width.xs}px;
	margin: ${sizes.container.border.width.xs}px auto 0 auto;
	padding: 0 3rem;

	${mq.md`
		height: ${sizes.navbar.height.xs - sizes.container.border.width.md}px;
		margin: ${sizes.container.border.width.md}px auto 0 auto;
		padding: 0 6rem;
	`};

	${mq.xl`
		width: ${sizes.container.width.xl}px;
		height: ${sizes.navbar.height.xl - sizes.container.border.width.xl}px;
		margin: ${sizes.container.border.width.xl}px auto 0 auto;
		padding: 0 3rem;
	`};
`;
