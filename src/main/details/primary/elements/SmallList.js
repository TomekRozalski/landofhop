import styled from 'styled-components';

const SmallList = styled.ul`
	display: inline;

	::before {
		content: ' (';
	}

	::after {
		content: ')';
	}

	li {
		display: inline;
	}
`;

export default SmallList;
