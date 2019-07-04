import styled from 'styled-components';
import { animated } from 'react-spring';

import { colors, indexes } from 'utils/theme';

const Main = styled(animated.main)`
	min-height: 100vh;
	border: 3rem solid ${colors.gray[100]};
	border-top: 0;
	padding-bottom: 8rem;
	background-color: ${colors.gray[700]};
	position: relative;
	z-index: ${indexes.main};
`;

export default Main;
