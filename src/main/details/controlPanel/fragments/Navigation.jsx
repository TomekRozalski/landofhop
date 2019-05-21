import React from 'react';
import styled from 'styled-components';

import { colors } from 'utils/theme';

const Example = styled.div`
	width: 100%;
	height: 10rem;
	margin-bottom: 2rem;
	border: 4px solid ${colors.success.strong};
`;

const Navigation = () => (
	<Example />
);

export default Navigation;
