import styled from 'styled-components';

import { mq } from 'utils/theme';
import { Label } from 'elements';

export default styled(Label)`
	margin: 0 1rem 0 0;
	
	${mq.md`
		margin: 0 1rem 0 2rem;
	`}
`;
