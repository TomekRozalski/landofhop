import styled from 'styled-components';

export default styled.img`
	display: ${({ isLoaded }) => (isLoaded ? 'block' : 'none')};
	pointer-events: none;
`;
