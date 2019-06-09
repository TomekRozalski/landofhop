import styled from 'styled-components';
import { animated } from 'react-spring';

import { colors, indexes } from 'utils/theme';

const Main = styled(animated.main)`
	background-color: ${colors.gray[700]};
	border: 3rem solid ${colors.gray[100]};
	border-top: 0;
	transition: height .2s, margin-top .2s;
	position: relative;
	z-index: ${indexes.main};
`;

export default Main;
