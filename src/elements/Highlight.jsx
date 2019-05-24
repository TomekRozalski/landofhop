import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { DetailsControlPanelContext } from 'config';
import { colors } from 'utils/theme';
import { FormattedMessage } from 'react-intl';

const Information = styled.mark`
	display: none;
`;

const Highlighter = styled.span`
	${({ block }) => (block && 'display: block;')}
	${({ highlight }) => `background: ${colors.highlight[highlight]};`}
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

	return type !== 'label' ? (
		<>
			<Highlighter block={block} highlight={highlight} lang={lang}>
				{children}
			</Highlighter>
			<Information>
				<FormattedMessage id={`dataOrigin.${type}`} />
			</Information>
		</>
	) : children;
};

Highlight.propTypes = {
	block: PropTypes.bool,
	children: PropTypes.node.isRequired,
	lang: PropTypes.string,
	type: PropTypes.string.isRequired,
};

Highlight.defaultProps = {
	block: null,
	lang: null,
};

export default Highlight;
