import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import Markdown from 'markdown-to-jsx';

import { grid } from 'utils';
import { fonts } from 'utils/theme';

const Wrapper = styled.ul`
	${grid}
`;

const Header = styled.h1`
	grid-column: 2 / -2;
	margin: 3rem 0;
    font: 500 3rem / 4rem ${fonts.primary};
    text-align: center;
`;

const Body = styled.section`
	grid-column: 2 / -2;
	font: 400 1.5rem / 2.5rem ${fonts.primary};
`;

const Contact = () => (
	<Wrapper>
		<Header><FormattedMessage id="contact.header" /></Header>
		<Body>
			<FormattedMessage id="contact.body">
				{message => (
					<Markdown options={{ forceInline: true }}>
						{message}
					</Markdown>
				)}
			</FormattedMessage>
		</Body>
	</Wrapper>
);

export default Contact;
