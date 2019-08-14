import styled from 'styled-components';

import { gutters } from 'utils/theme';

export default styled.label`
	flex-grow: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	height: ${gutters.inputHeight}rem;
	cursor: pointer;
`;
