import styled from 'styled-components';

import { mq } from 'utils/theme';
import { Input } from 'elements';

export default styled(Input)`
	margin-bottom: 1rem;

	${mq.md`
		margin-bottom: 0;
	`}

	${mq.lg`
		min-width: 260px;
	`}
`;
