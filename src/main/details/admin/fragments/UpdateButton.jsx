import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { colors } from 'utils/theme';

const StyledLink = styled(Link)`
	display: flex;
    justify-content: center;
    align-items: center;
	width: 18rem;
	height: 3.4rem;
	margin-right: 1rem;
	padding: 0 2rem;
	background-color: ${colors.success.light};
	text-decoration: none;
	color: ${colors.gray[700]};
	transition: background-color .2s;
	cursor: pointer;

	:hover {
		background-color: ${colors.success.strong};
	}
`;

const UpdateButton = ({ text, to }) => (
	<StyledLink to={to}>
		<FormattedMessage id={text} />
	</StyledLink>
);

UpdateButton.propTypes = {
	text: string.isRequired,
	to: string.isRequired,
};

export default UpdateButton;
