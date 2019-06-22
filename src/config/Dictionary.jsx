import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { Helmet } from 'react-helmet';

import { dictionary as library } from '../utils';
import { LanguageContext } from './index';

const Dictionary = ({ children }) => {
	const { language } = useContext(LanguageContext);

	return (
		<>
			<IntlProvider locale={language} messages={library[language]}>
				{ children }
			</IntlProvider>
			<Helmet><html lang={language} /></Helmet>
		</>
	);
};

Dictionary.propTypes = {
	children: PropTypes.node,
};

Dictionary.defaultProps = {
	children: null,
};

export default Dictionary;
