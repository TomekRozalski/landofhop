import React, { useState } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';

import { colors, fonts } from 'utils/theme';
import { useInterval } from 'utils/hooks';

const Wrapper = styled.div`
	padding-top: 2rem;
	text-align: center;
`;

const Statement = styled.h1`
	margin: 4rem;
	font: 500 8rem / 1 ${fonts.primary};
	text-shadow:
		1px 1px 1px ${colors.gray[500]},
		0 0 0 ${colors.gray[200]},
		1px 1px 1px ${colors.gray[500]};
	color: transparent;
`;

const Counter = styled.p`
	font: 400 1.6rem / 1 ${fonts.primary};
	color: ${colors.gray[200]};
`;

const NotFound = () => {
	const [seconds, setSeconds] = useState(3);

	useInterval(() => {
		setSeconds(seconds - 1);
	}, 3000);

	return (
		seconds === 0
			? <Redirect to="/" />
			: (
				<Wrapper>
					<Statement><FormattedMessage id="notFound.title" /></Statement>
					<Counter><FormattedMessage id="notFound.countDown" values={{ seconds }} /></Counter>
					<FormattedMessage id="notFound.title">
						{title => <Helmet><title>{title}</title></Helmet>}
					</FormattedMessage>
				</Wrapper>
			)
	);
};

export default NotFound;
