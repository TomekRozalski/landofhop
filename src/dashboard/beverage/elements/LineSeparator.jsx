import styled from 'styled-components';

import { colors } from 'utils/theme';

const LineSeparator = styled.div`
	grid-column: 2 / 5;
    height: 1px;
    margin: 1rem 0;
	background-color: ${colors.gray[400]};
`;

export default LineSeparator;
