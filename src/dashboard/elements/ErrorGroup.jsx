import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { colors } from 'utils/theme';
import { FieldStatusIndicator } from 'elements';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 100%;
	border: ${colors.danger.strong} solid .2rem;
	padding: 0 1rem 0 2rem;
`;

const ErrorGroup = () => (
	<Wrapper>
		<FieldStatusIndicator danger>
			<FormattedMessage id="dashboard.loadError" />
		</FieldStatusIndicator>
	</Wrapper>
);

export default ErrorGroup;
