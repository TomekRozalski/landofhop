import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const DetailsControlPanelContext = React.createContext({});

const DetailsControlPanel = ({ children }) => {
	const [isProducerDataHighlighted, setProducerDataHighlight] = useState(false);
	const [isEditorialDataHighlighted, setEditorialDataHighlight] = useState(false);

	return (
		<DetailsControlPanelContext.Provider
			value={{
				isProducerDataHighlighted,
				isEditorialDataHighlighted,
				toggleProducerDataHighlight: () => setProducerDataHighlight(!isProducerDataHighlighted),
				toggleEditorialDataHighlight: () => setEditorialDataHighlight(!isEditorialDataHighlighted),
			}}
		>
			{ children }
		</DetailsControlPanelContext.Provider>
	);
};

DetailsControlPanel.propTypes = {
	children: PropTypes.node.isRequired,
};

export default DetailsControlPanel;
