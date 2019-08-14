import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { colors } from 'utils/theme';

const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	background-color: ${colors.gray[600]};
	color: ${colors.gray[300]};
	cursor: crosshair;
`;

const RevealButton = props => (
	<StyledButton type="button" {...props}>
		<FormattedMessage id="dashboard.reveal" />
	</StyledButton>
);

export default RevealButton;
