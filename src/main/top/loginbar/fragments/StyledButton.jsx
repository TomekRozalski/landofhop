import styled from 'styled-components';

import { mq } from 'utils/theme';
import { Button } from 'elements';

export default styled(Button)`
	margin: 1rem 0 0 0;
	float: right;

	${mq.md`
		margin: 0 0 0 2rem;
	`}
`;
