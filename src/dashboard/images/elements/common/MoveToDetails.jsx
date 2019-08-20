import React from 'react';
import { shape, string } from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { colors } from 'utils/theme';

const StyledLink = styled(Link)`
	display: flex;
    justify-content: center;
    align-items: center;
	min-width: 220px;
	height: 3.4rem;
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

const MoveToDetails = ({ params: { badge, brand, shortId } }) => (
	<StyledLink to={`/details/${shortId}/${brand}/${badge}`}>
		<FormattedMessage id="dashboard.goToDetails" />
	</StyledLink>
);

MoveToDetails.propTypes = {
	params: shape({
		badge: string.isRequired,
		brand: string.isRequired,
		shortId: string.isRequired,
	}).isRequired,
};

export default MoveToDetails;
