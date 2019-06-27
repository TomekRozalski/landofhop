import React, { useContext } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import 'moment/locale/pl';
import { isBoolean, isDate } from 'lodash';
import { FormattedMessage } from 'react-intl';

import { LanguageContext, AuthenticationContext } from 'config';
import { colors, fonts } from 'utils/theme';

const ExpirationItem = styled.div`
	display: flex;
	margin: 1rem 3.5rem;
	padding: 0 2rem;
	font: 400 1.5rem / 3rem ${fonts.primary};
	color: ${colors.gray[700]};
	background-color: ${({ expired }) => (
		expired
			? colors.danger.strong
			: colors.success.strong
	)};
`;

const ExpirationDate = () => {
	const { language } = useContext(LanguageContext);
	const { tokenExpiration } = useContext(AuthenticationContext);

	if (isBoolean(tokenExpiration)) {
		return (
			<ExpirationItem expired>
				<FormattedMessage id="navbar.expiredAccessToken" />
			</ExpirationItem>
		);
	}

	if (isDate(tokenExpiration)) {
		moment.locale(language);

		return (
			<ExpirationItem>
				<FormattedMessage id="navbar.tokenExpires" />
				{' '}
				{ moment().to(tokenExpiration) }
			</ExpirationItem>
		);
	}

	return null;
};

export default ExpirationDate;
