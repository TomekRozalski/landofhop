import React, { useContext } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import 'moment/locale/pl';
import { isBoolean, isDate } from 'lodash';
import { FormattedMessage } from 'react-intl';

import { LanguageContext, AuthenticationContext } from 'config';
import { colors, gutters } from 'utils/theme';

const ExpirationItem = styled.li`
	display: flex;
	align-items: center;
	height: ${gutters.inputHeight}rem;
	padding: 0 2rem;
	color: ${colors.gray[700]};
	background-color: ${({ expired }) => (
		expired
			? colors.danger.light
			: colors.success.light
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
