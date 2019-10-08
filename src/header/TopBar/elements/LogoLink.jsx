import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
	grid-area: logo;
	display: flex;
	justify-content: center;

	&:hover > h1 {
		transform: scaleX(1.2);
	}
`;
