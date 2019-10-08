import styled from 'styled-components';

import { grids, mq, sizes } from 'utils/theme';

export default styled.div`
	${grids.headerGrid}
	grid-template-rows: ${sizes.topbar.height.xs}px;

	${mq.md`
		grid-template-rows: ${sizes.topbar.height.md}px;
	`}

	${mq.xl`
		grid-template-rows: ${sizes.topbar.height.xl}px;
	`}
`;
