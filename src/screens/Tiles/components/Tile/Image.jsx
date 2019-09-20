import styled from 'styled-components';

import { timingFunctions } from 'utils/theme';

export default styled.img`
	display: ${({ isLoaded }) => (isLoaded ? 'block' : 'none')};
	height: 100%;
	transform: scale(1);
	transition: transform ${timingFunctions.spring};
	pointer-events: none;
`;
