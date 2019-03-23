import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { constants } from 'utils';

export const LanguageContext = React.createContext({
	changeLanguage: () => {},
	language: constants.siteLanguages.pl,
});

const Language = ({ children }) => {
	const [language, setLanguage] = useState(constants.siteLanguages.pl);

	const changeLanguage = (languageToChange) => {
		window.localStorage.setItem('language', languageToChange);

		setLanguage(languageToChange);
	};

	useEffect(() => {
		const storageLanguage = window.localStorage.getItem('language');

		if (storageLanguage) {
			setLanguage(storageLanguage);
		}
	}, []);

	return (
		<LanguageContext.Provider value={{ changeLanguage, language }}>
			{ children }
		</LanguageContext.Provider>
	);
};

Language.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Language;
