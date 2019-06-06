import styled from 'styled-components';
import { animated } from 'react-spring';

import { colors, indexes } from 'utils/theme';

const Main = styled(animated.main)`
	background-color: ${colors.gray[700]};
	transition: height .2s, margin-top .2s;
	position: relative;
	z-index: ${indexes.main};
`;

export default Main;
