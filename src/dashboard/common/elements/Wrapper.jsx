import styled from 'styled-components';
import { Form } from 'formik';

import { grid } from 'utils';

const Wrapper = styled(Form)`
	${grid}
	margin-bottom: 6rem;
`;

export default Wrapper;
