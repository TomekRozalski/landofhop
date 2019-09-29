import React, { useContext } from 'react';

import { LanguageContext } from 'config';
import { constants } from 'utils';
import { Button, ButtonsWrapper } from './index';

const LangNavigation = () => {
	const { changeLanguage } = useContext(LanguageContext);
	const { en, pl } = constants.siteLanguages;

	return (
		<ButtonsWrapper>
			<Button onClick={() => changeLanguage(pl)} uppercase>{pl}</Button>
			<Button onClick={() => changeLanguage(en)} uppercase>{en}</Button>
		</ButtonsWrapper>
	);
};

export default LangNavigation;
