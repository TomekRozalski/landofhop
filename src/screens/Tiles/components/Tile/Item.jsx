import styled from 'styled-components';

import { sizes } from 'utils/theme';

export default styled.li`
	${({ style }) => style}
	display: flex;
	align-items: flex-end;
	padding-bottom: ${sizes.tiles.tile.padding.bottom}px;
`;
