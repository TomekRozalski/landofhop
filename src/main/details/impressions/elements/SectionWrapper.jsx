import styled from 'styled-components';
import { colors } from 'utils/theme';

const SectionWrapper = styled.dl`
	${({ type }) => {
		if (type === 'provided') {
			return 'grid-column: 3 / 4;';
		}
		if (type === 'verified') {
			return 'grid-column: 4 / 5;';
		}

		return null;
	}};
	border-top: 1px solid ${colors.gray[400]};
	margin: 0;
	padding: 1.3rem 0;
`;

export default SectionWrapper;
