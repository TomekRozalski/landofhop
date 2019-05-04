import styled from 'styled-components';

import { constants } from 'utils';
import { colors } from 'utils/theme';

const Highlight = styled.span`
	${({ type }) => (
		type === constants.details.type.producer
			? `background: ${colors.highlight.light};`
			: ''
	)}
	${({ type }) => (
		type === constants.details.type.editorial
			? `border-bottom: 1px dotted ${colors.gray[200]};`
			: ''
	)}
`;

export default Highlight;
