import styled from 'styled-components';

import { indexes } from 'utils/theme';

export default styled.div`
	display: block;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, .3);
	position: fixed;
	top: 0;
	left: 0;
	z-index: ${indexes.overlay};
`;
