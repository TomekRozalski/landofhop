import styled from 'styled-components';

import { gutters } from 'utils/theme';

export default styled.div`
	grid-column: 1 / 3;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	height: ${gutters.inputHeight}rem;
`;
