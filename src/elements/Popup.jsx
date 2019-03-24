import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { BrokenBottle } from 'elements/icons';
import { Button } from 'elements';
import {
	colors,
	fonts,
	indexes,
	mq,
} from 'utils/theme';

const Card = styled.section`
	display: flex;
	width: 90%;
	height: 90%;
	border: .5rem solid ${colors.gray[700]};
	background-color: ${colors.gray[700]};
	position: fixed;
	top: 50%;
	left: 50%;
	z-index: ${indexes.popup};
	transform: translate(-50%, -50%);

	${mq.md`
		width: 600px;
		height: 600px;
	`}
`;

const CardInside = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	border: .5rem solid ${colors.gray[100]};
	padding: 2rem 3rem;
	text-align: center;

	svg { display: none; }

	${mq.md`
		padding: 4rem 6rem;

		svg {
			display: block;
			height: 200px;
			margin-bottom: 5rem;
			fill: ${colors.danger.strong};
		}
	`}
`;

const TextContent = styled.div`
	flex: 1 1 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;

	${mq.md`
		justify-content: flex-start;
	`}
`;

const Header = styled.h1`
	margin-bottom: 2.5rem;
	font: 400 3rem / 1 ${fonts.primary};
`;

const Error = styled.code`
	font-size: 1.6rem;
	line-height: 2.3rem;
`;

const ResetLink = styled(Button)`
	margin: 1rem;
	background-color: ${colors.danger.strong};

	&:hover {
		background-color: ${colors.gray[300]};
		color: ${colors.gray[700]};
	}
`;

const ResetInfo = styled.small`
	display: block;

	&::before {
		content: '(';
	}

	&::after {
		content: ')';
	}
`;

const Popup = ({ appError, close, reset }) => (
	<Card>
		<CardInside>
			<BrokenBottle />
			<TextContent>
				<Header>
					<FormattedMessage id="appError.title" />
				</Header>
				<Error><FormattedMessage id={appError} /></Error>
			</TextContent>
			{
				reset ? (
					<>
						<ResetLink href="/">
							<FormattedMessage id="appError.goBackToMainPage" />
						</ResetLink>
						<ResetInfo>
							<FormattedMessage id="appError.reloadTheAppIfNecessary" />
						</ResetInfo>
					</>
				) : (
					<ResetLink onClick={close}>
						<FormattedMessage id="appError.close" />
					</ResetLink>
				)
			}
		</CardInside>
	</Card>
);

Popup.propTypes = {
	appError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
	close: PropTypes.func.isRequired,
	reset: PropTypes.bool,
};

Popup.defaultProps = {
	reset: false,
};

export default Popup;
