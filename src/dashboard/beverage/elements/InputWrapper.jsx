import styled from 'styled-components';

export default styled.div`
	display: flex;
	grid-column: ${({ place }) => {
		switch (place) {
		case 'left':
			return '3 / 4';
		case 'middle':
			return '4 / 5';
		case 'right':
			return '5 / 6';
		case 'slider':
			return '4 / 6';
		case 'wide':
		default:
			return '3 / 5';
		}
	}};
	position: relative;
`;
