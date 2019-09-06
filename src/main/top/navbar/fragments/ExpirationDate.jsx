import React, { useContext } from 'react';
import styled from 'styled-components';
import { formatDistance } from 'date-fns';
import { pl } from 'date-fns/locale';
import { isBoolean, isDate } from 'lodash';
import { FormattedMessage } from 'react-intl';

import { LanguageContext, AuthenticationContext } from 'config';
import { constants } from 'utils';
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
		const timeToExpired = language === constants.siteLanguages.pl
			? formatDistance(tokenExpiration, new Date(), { locale: pl })
			: formatDistance(tokenExpiration, new Date());

		return (
			<ExpirationItem>
				<FormattedMessage
					id="navbar.tokenExpires"
					values={{ timeToExpired }}
				/>
			</ExpirationItem>
		);
	}

	return null;
};

export default ExpirationDate;
