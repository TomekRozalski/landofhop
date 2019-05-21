import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

import { constants } from 'utils';
import { colors, fonts } from 'utils/theme';
import { FormattedMessage } from 'react-intl';

const Information = styled.mark`
	display: none;


`;

const Wrapper = styled.span`
	${({ block }) => (block && `
		display: block;
		margin: .5rem 0;
		padding: .5rem 0;
	`)}
	${({ marked }) => (
		marked
			? `background: ${colors.highlight.producer};`
			: ''
	)}


	svg {
		width: 16px;
	}
`;

const Highlight = ({ type, block, children }) => {
	if (type !== 'label') {
		return (
			<>
				<Wrapper block={block}>
					{children}
				</Wrapper>
				<Information>
					<FormattedMessage id={`dataOrigin.${type}`} />
				</Information>
			</>
		);
	}

	return children;
};

export default Highlight;
