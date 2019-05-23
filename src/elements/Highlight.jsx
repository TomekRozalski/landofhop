import React, { useContext } from 'react';
import styled from 'styled-components';

import { DetailsControlPanelContext } from 'config';
import { colors } from 'utils/theme';
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
	${({ highlight }) => `background: ${colors.highlight[highlight]};`}

	svg {
		width: 16px;
	}
`;

const Highlight = ({
	block,
	children,
	lang,
	type,
}) => {
	const {
		isProducerDataHighlighted,
		isEditorialDataHighlighted,
	} = useContext(DetailsControlPanelContext);

	let highlight = null;

	if (type === 'producer' && isProducerDataHighlighted) {
		highlight = 'producer';
	} else if (type === 'editorial' && isEditorialDataHighlighted) {
		highlight = 'editorial';
	}

	if (type !== 'label') {
		return (
			<>
				<Wrapper block={block} highlight={highlight} lang={lang}>
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
