import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const DetailsControlPanelContext = React.createContext({});

const DetailsControlPanel = ({ children }) => {
	const [isProducerDataHighlighted, setProducerDataHighlight] = useState(false);
	const [isEditorialDataHighlighted, setEditorialDataHighlight] = useState(false);

	const toggleProducerDataHighlight = () => {
		window.localStorage.setItem('isProducerDataHighlighted', !isProducerDataHighlighted ? 1 : 0);
		setProducerDataHighlight(!isProducerDataHighlighted);
	};

	const toggleEditorialDataHighlight = () => {
		window.localStorage.setItem('isEditorialDataHighlighted', !isEditorialDataHighlighted ? 1 : 0);
		setEditorialDataHighlight(!isEditorialDataHighlighted);
	};

	useEffect(() => {
		const storageProducer = window.localStorage.getItem('isProducerDataHighlighted');
		const storageEditorial = window.localStorage.getItem('isEditorialDataHighlighted');

		if (storageProducer) {
			setProducerDataHighlight(!!Number(storageProducer));
		}

		if (storageEditorial) {
			setEditorialDataHighlight(!!Number(storageEditorial));
		}
	}, []);

	return (
		<DetailsControlPanelContext.Provider
			value={{
				isProducerDataHighlighted,
				isEditorialDataHighlighted,
				toggleProducerDataHighlight,
				toggleEditorialDataHighlight,
			}}
		>
			{ children }
		</DetailsControlPanelContext.Provider>
	);
};

DetailsControlPanel.propTypes = {
	children: PropTypes.node,
};

DetailsControlPanel.defaultProps = {
	children: null,
};

export default DetailsControlPanel;
