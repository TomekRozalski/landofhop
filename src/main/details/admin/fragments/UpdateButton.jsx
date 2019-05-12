import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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

const UpdateButton = ({ to }) => (
	<StyledLink to={to}>
		<FormattedMessage id="details.admin.updateBeverage" />
	</StyledLink>
);

UpdateButton.propTypes = {
	to: PropTypes.string.isRequired,
};

export default UpdateButton;
