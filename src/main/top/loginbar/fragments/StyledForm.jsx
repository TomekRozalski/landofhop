import styled from 'styled-components';
import { Form } from 'formik';

import { mq } from 'utils/theme';

export default styled(Form)`
	padding: 2rem 0;

	${mq.md`
		display: flex;
		padding: 0;
	`}
`;
